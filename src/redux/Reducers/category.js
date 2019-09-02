const initialState = {
  categoryList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CATEGORY_FULFILLED':
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload.data.result,
      };
    default:
      return state;
  }
};

export default category;

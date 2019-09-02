import Axios from 'axios'
import urlApi from '../../configs/urlApi'

export const getCategory = () => {
    return {
        type : "GET_CATEGORY",
        payload : Axios.get(urlApi + '/category')
    }
}
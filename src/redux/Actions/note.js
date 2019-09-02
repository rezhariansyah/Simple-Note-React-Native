import Axios from 'axios'
import urlApi from '../../configs/urlApi'

export const getNote = () => {
    return {
        type : "GET_NOTE",
        payload : Axios.get(urlApi + '/note')
    }
}
import axios from 'axios'
import { 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

 } from '../constant/productConstant'

 export const productDetailAation = (id) => async (dispatch) => {
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`)
        // console.log(data)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error && error
                
        })
    }
} 
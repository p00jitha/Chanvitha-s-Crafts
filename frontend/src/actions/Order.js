import axios from 'axios';
import {returnErrors} from './Errors';
import {ORDERS_LOADING, GET_ORDERS, CHECKOUT } from './Types';

export const getOrders = (id) => dispatch =>{
    dispatch(setOrderLoading);
    axios.get(`/api/order/{id}`)
    .then(res => dispatch({
        type:GET_ORDERS,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
}

export const setOrderLoading = () =>{
    return{
        type:ORDERS_LOADING
    }
}
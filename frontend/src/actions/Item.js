import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING} from './Types'
import { returnErrors } from './Errors'

export const getItems = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('/api/item/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addItem = (item) => (dispatch) => {
    axios.post('/api/item/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = (id) => (dispatch) => {
    axios.delete(`/api/item/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateItem = (id, item) => (dispatch) => {
    axios.put(`/api/item/items/${id}`, item)
        .then(res => dispatch({
            type: UPDATE_ITEM,
            payload: Promise.all([id, res.data])
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}
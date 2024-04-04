import {combineReducers} from 'redux';
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer';
import errorReducer from './errorReducer'
import orderReducer from './orderReducer';

const reducer = combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
})

export default reducer;

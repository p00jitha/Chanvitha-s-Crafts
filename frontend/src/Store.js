import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import Rootreducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const Store = configureStore( {reducer:Rootreducer},initialState,compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
console.log(Store)
export default Store;


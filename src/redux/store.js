import {applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';


export default createStore(reducer, applyMiddleware(promiseMiddleware));
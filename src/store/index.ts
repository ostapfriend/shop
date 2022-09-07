import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Product } from '../types/Product';

import productsReducer from './products';

import {
  actions as ProductsActions,
  selectors as ProductsSelectors,
} from './products';


export const actions = {ProductsActions};

export const selectors = {
  getProducts: (state: {products: Product[]}) =>
    ProductsSelectors.getProducts(state.products),
}

const reducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));


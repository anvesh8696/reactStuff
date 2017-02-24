/**
 * With Redux, there is only a SINGLE STORE. Properties and mutations of the
 * store are managed by reducers. This file sets up the store, and hydrates
 * the store with reducers.
 *
 */
var redux = require('redux');
var createStore = redux.createStore;
var compose = redux.compose;
// var thunk = require('redux-thunk').thunk; // needed for async actions
var reducer = require('../reducers');



// create a store, and apply middleware
var store = compose()(createStore)(reducer);
module.exports = store;

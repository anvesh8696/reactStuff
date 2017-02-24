/**
 * This file (for now) contains all actions that can be dispatched (store.dispatch({})).
 * These are all the actions that can be dispatched.
 *
 * These actions are called from async actions (in this file) as well as from UI components that
 * are dispatching actions.
 */

// import { fetch } from '../lib/xhr';
// import { ActionTypes as types } from '../Constants';
// import { replaceState } from 'redux-router';

/**
 * Sets the from country and associated values
 * @param {String} country The 2-digit country code
 */
function changeOriginCountry(countryCode, currencyCode) {
	return {
		type: types.CHANGE_ORIGIN_COUNTRY,
		data: {
			fromCountryCode: countryCode,
			fromCurrencyCode: currencyCode
		}
	};
}



module.exports = {
  changeOriginCountry: changeOriginCountry
}

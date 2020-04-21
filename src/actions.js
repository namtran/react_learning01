import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchFieldAction = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});
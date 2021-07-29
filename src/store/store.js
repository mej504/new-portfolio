import { useMemo } from 'react';
import { createStore } from 'redux';

let store;

const initialState = {
	workPageSelected: false,
}

const reducer = ( state = initialState, action ) => {

	switch ( action.type ) {

		case 'UPDATE_WORK_PAGE_STATUS':
			return {
				...state,
				workPageSelected: payload.workPageSelected 
			}

		default:
			return state
	}

}


const initStore = ( preloadedState = initialState ) => {

	return createStore(
		reducer,
		preloadedState
	)

}
export const initializeStore = ( preloadedState ) => {

	let _store = store ?? initStore( preloadedState );

	if( preloadedState && store) {

		_store = initStore({
			...store.getState(),
			...preloadedState
		})

		store = undefined;

	}

	if( typeof window === 'undefined' ) {
		return _store;
	}

	if( !store ) store = _store;

	return _store;

}

export function useStore( initialState ) {
	const store = initializeStore( initialState );
	return store;
}

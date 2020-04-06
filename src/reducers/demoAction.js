import React from 'react';
import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
	default: ''
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.DEMO_ACTION: {
			return {
				...state,
				default: action.payload,
			};
		}
		default : {
			return state;
		}
	}
};
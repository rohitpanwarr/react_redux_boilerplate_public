import React from 'react';
import { DEMO_ACTION } from './actionTypes';

export const demoAction = (action) => {
	return {
		type : DEMO_ACTION,
		payload : action
	}
};
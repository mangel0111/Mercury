const defaultState = {
	merchants: {
		data: []
	}
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'RECEIVE_MERCHANTS':
		return Object.assign({}, state, {
			merchants: action.merchants.merchants
		});
	default:
		return state;
	}
};

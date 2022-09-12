const initialState = {
	logindata: [],
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case "LOGIN":
			return {
				logindata: action.payload,
			};
		case "LOGOUT":
			return [];
		default:
			return state;
	}
};

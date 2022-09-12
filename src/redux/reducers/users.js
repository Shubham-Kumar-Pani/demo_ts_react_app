const initialState = {
	userdata: [],
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case "USER":
			return {
				userdata: action.payload,
			};
		default:
			return state;
	}
};

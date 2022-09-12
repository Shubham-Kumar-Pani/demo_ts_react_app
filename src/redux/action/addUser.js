export const login = (params, nav) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "LOGIN",
				payload: params,
			});
			console.log(nav);
		} catch (e) {
			dispatch({
				type: "LOGIN",
				payload: [],
			});
		}
	};
};

export const logout = (params, nav) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "LOGOUT",
			});
			console.log(nav);
		} catch (e) {
			dispatch({
				type: "LOGOUT",
			});
		}
	};
};

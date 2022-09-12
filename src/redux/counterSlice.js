import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const user = createSlice({
	name: "user",
	initialState: [{ username: "Shubham", password: "1234" }],
	reducers: {
		setUser: (state, action) => {
			debugger;
			return state;
		},
	},
});
export default user.reducer;

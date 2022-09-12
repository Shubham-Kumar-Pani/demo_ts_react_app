// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { compose, applyMiddleware, createStore } from "redux";
import reducer from "./reducers/index";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["admin"],
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

export default function configureStore() {
	const enhancer = compose(applyMiddleware(...middlewares));
	const persistedReducer = persistReducer(persistConfig, reducer);
	const store = createStore(persistedReducer, enhancer);
	const persistor = persistStore(store);

	return { store, persistor };
}

// function counterReducer(state = initialState, action) {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// }
// const persistConfig = {
// 	key: "root",
// 	storage,
// };
// const persistedReducer = persistReducer(persistConfig, userReducer);
// debugger;
// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: [thunk],
// });

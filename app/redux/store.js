import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import usersReducer from "./reducers/user_list.reducer"
import logger from 'redux-logger'
// export const store = configureStore({
//     reducer: {
//         authReducer: authReducer,
//     },
// });
//const debounceNotify = _.debounce(notify => notify());

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        usersReducer: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    //devTools: process.env.NODE_ENV !== 'production',
    //preloadedState,
    //enhancers: [batchedSubscribe(debounceNotify)],
})
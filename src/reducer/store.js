// // store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { fetchData } from './action'; // Correct import path

// import rootReducer from './reducersa'; // Correct import path
// console.log(fetchData)

// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducersa"

export const store= configureStore({
    reducer:{
        user:userSlice
    }
})
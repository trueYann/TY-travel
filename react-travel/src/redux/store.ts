<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { shoppingCartSlice } from './shoppingCart/slice'
import { orderSlice } from './order/slice'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
}

const rootReducer = combineReducers({
	language: languageReducer,
	recommendProducts: recommendProductsReducer,
	productDetail: productDetailSlice.reducer,
	productSearch: productSearchSlice.reducer,
	user: userSlice.reducer,
	shoppingCart: shoppingCartSlice.reducer,
	order: orderSlice.reducer,
=======
import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    order: orderSlice.reducer
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
<<<<<<< HEAD
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
	devTools: true,
})
=======
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

<<<<<<< HEAD
export default { store, persistor }
=======
export default { store, persistor };
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1

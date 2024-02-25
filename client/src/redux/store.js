import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



// Aquí se combinan userReducer y themeReducer bajo las claves 'user' y 'theme' respectivamente
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

// Configuración de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export const persistor = persistStore(store);




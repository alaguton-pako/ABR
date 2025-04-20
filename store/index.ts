import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import createSessionStorage from "redux-persist/lib/storage/session";
import playerReducer from "./playerSlice";
import { combineReducers } from "redux"; // Add this import


const rootReducer = combineReducers({
  player: playerReducer
});

const persistConfig = {
  key: 'podcastPlayerSession', // Different key to avoid conflicts
  storage: createSessionStorage, // <-- Use sessionStorage instead
  whitelist: ['player'],
  debug: true
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// 4. Enhanced persistor with debug callbacks
export const persistor = persistStore(store, null, () => {
  console.log('Rehydration complete');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addProductToCart(state, action) {
      state.items.push(action.payload);
    },
    deleteProductCart(state, action) {
      const idx = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(idx, 1);
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage,
};

export const persistedReducerCart = persistReducer(
  persistConfig,
  cartSlice.reducer
);

export const { addProductToCart, deleteProductCart } = cartSlice.actions;

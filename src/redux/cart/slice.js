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
    incrementProductCart(state, action) {
      console.log(action.payload);
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + action.payload.increment;
          item.oldPrice = item.oldPrice + item.initialCartOldPrice;
          item.newPrice = item.newPrice + item.initialCartNewPrice;
          return item;
        }
        return item;
      });
    },
    decrementProductCart(state, action) {
      console.log(action.payload);
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity - action.payload.increment;
          item.oldPrice = item.oldPrice - item.initialCartOldPrice;
          item.newPrice = item.newPrice - item.initialCartNewPrice;
          return item;
        }
        return item;
      });
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

export const {
  addProductToCart,
  incrementProductCart,
  decrementProductCart,
  deleteProductCart,
} = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { generateId } from 'services/generateOrderId';

const initialState = {
  items: [],
  orderId: generateId(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart(state, action) {
      state.items.push(action.payload);
    },
    incrementProductCart(state, action) {
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + action.payload.increment;
          item.oldPrice = item.oldPrice + item.initialOldPrice;
          item.newPrice = item.newPrice + item.initialNewPrice;
          return item;
        }
        return item;
      });
    },
    decrementProductCart(state, action) {
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity - action.payload.increment;
          item.oldPrice = item.oldPrice - item.initialOldPrice;
          item.newPrice = item.newPrice - item.initialNewPrice;
          return item;
        }
        return item;
      });
    },
    deleteProductCart(state, action) {
      const idx = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(idx, 1);
    },
    clearCart(state) {
      state.items = [];
    },
    updateOrderId(state) {
      state.orderId = generateId();
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
  clearCart,
  updateOrderId,
} = cartSlice.actions;

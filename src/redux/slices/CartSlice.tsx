import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartType, ItemType } from "../../utils/Types&Interfaces";
import { getCartFromLS } from "../../utils/getCartFromLS";

interface CartInt {
  cart: CartType[];
  totalPrice: number;
  totalCount: number;
}

const { cart, totalPrice, totalCount } = getCartFromLS();

const initialState: CartInt = {
  cart: cart,
  totalPrice: totalPrice,
  totalCount: totalCount,
};

export const CartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartType>) {
      const findEl = state.cart.find((el) => el.id === action.payload.id);
      if (findEl) {
        findEl.count++;
      } else {
        state.cart.push(action.payload);
      }
      state.totalPrice = state.cart.reduce((total, el) => {
        return (total += el.count * el.price);
      }, 0);
      state.totalCount = state.cart.reduce((total, el) => {
        return (total += el.count);
      }, 0);
    },
    addItem(state, action) {
      const findEl = state.cart.find((el) => el.id === action.payload);
      if (findEl) {
        findEl.count++;
        state.totalPrice += findEl.price;
        state.totalCount++;
      }
    },
    minusItem(state, action) {
      const findEl = state.cart.find((el) => el.id === action.payload);
      if (findEl) {
        findEl.count--;
        state.totalPrice -= findEl.price;
        state.totalCount--;
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, addItem, minusItem, removeItem, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;

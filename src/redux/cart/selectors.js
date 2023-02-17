export const selectProductInCart = state => state.cart.items;
export const selectOrderId = state => state.cart.orderId;
export const selectCalculateAmount = state => {
  const productsCart = selectProductInCart(state);

  const cost = productsCart.reduce((acc, item) => {
    acc += item.newPrice;
    return acc;
  }, 0);

  const sale = productsCart.reduce((acc, item) => {
    acc += item.oldPrice - item.newPrice;
    return acc;
  }, 0);

  return {
    cost,
    sale,
  };
};

export const createOldPrice = (sale, price) => {
  const res = (price / 100) * sale;
  return Math.round(res + price);
};

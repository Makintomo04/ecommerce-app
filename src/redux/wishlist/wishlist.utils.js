import CartItem from "../../components/cart-item/CartItem";

export const addItemToWishList = (favItems, favItemToAdd) => {
  const existingFav = favItems.find(
    (favItem) => favItem.id === favItemToAdd.id
  );
  if (existingFav) {
    return [...favItems];
  }
  return [...favItems, { ...favItemToAdd, fav: true }];
};
export const removeItemFromWishList = (favItems, favItemToRemove) => {
  return favItems.filter((favItem) => favItem.id != favItemToRemove.id);
};

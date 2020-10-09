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
  const existingFav = favItems.find(
    (favItem) => favItem.id === favItemToRemove.id
  );
  let index = favItems.indexOf(existingFav);
  favItems.splice(index, 1);
  return [...favItems];
};

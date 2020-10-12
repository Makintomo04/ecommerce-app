export const filterCatalogue = (collectionToFilter, filterGender) => {
  console.log("clicked");
  //   [...collectionToFilter[0].items].map((item) => console.log(item.gender));
  return collectionToFilter[0].items.filter(({ gender }) => gender == "mens");
  //   console.log(collectionToFilter);
};
export default filterCatalogue;

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";
import newinReducer from "./newin/newin.reducer";
import womensnewinReducer from "./womens-newin/womensnewin.reducer";
import shoesReducer from "./shoes/shoes.reducer";
import accessoriesReducer from "./accessories/accessories.reducer";
import activewearReducer from "./activewear/activewear.reducer";
import clothingReducer from "./clothing/clothing.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  newin: newinReducer,
  womensnewin: womensnewinReducer,
  shoes: shoesReducer,
  accessories: accessoriesReducer,
  activewear: activewearReducer,
  clothing: clothingReducer,
});

export default persistReducer(persistConfig, rootReducer);

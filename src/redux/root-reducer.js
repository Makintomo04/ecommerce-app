import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";
import shoesReducer from "./shoes/shoes.reducer";
import accessoriesReducer from "./accessories/accessories.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  shoes: shoesReducer,
  accessories: accessoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);

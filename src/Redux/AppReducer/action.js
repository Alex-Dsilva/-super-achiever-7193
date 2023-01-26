import * as types from "./actiontypes";
import axios from "axios";

export const removeFromCart = (payload) => {
    return {
      type: types.REMOVE_CART_ITEM,
      payload,
    };
  };
  
  export const modifyItemQuantity = (payload) => {
    return {
      type: types.MODIFY_ITEM_QUANTITY,
      payload,
    };
  };
  
  export const modifyItemSize = (payload) => {
    return {
      type: types.MODIFY_ITEM_SIZE,
      payload,
    };
  };
  
  export const addToWishList = (payload) => {
    return {
      type: types.ADD_TO_WISHLIST,
      payload,
    };
  };
  
  export const addToCart = async (payload) => {

    const { data } = await axios.get(`https://mysterious-blue-moth.cyclic.app/product/singleProduct/${payload}`);
    return {
      type: types.ADD_CART_ITEM,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity:data.product.quantity,
      },
    };
  };
  
  export const removeFromWishlist = (payload) => {
    return {
      type: types.REMOVE_WISHLIST_ITEM,
      payload,
    };
  };
  
  export const setCartEmpty = () => {
    return {
      type: types.MAKE_CART_EMPTY,
    };
  };

const getProduct = (params) => (dispatch) => {
     dispatch({ type: types.GET_DATA_REQUEST });
     return axios
          .get("http://localhost:8080/product", params)
          .then((res) =>
               dispatch({
                    type: types.GET_DATA_SUCCESS,
                    payload: res?.data,
               })
          )
          .catch((e) => {
               dispatch({ type: types.GET_DATA_FAILURE, payload: e });
          });
};
export { getProduct };
  

  export const updateAddress = (payload) => {
    return {
      type: types.UPDATE_ADDRESS,
      payload,
    };
  };
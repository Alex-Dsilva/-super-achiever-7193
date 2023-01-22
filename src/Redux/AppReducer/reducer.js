
import * as types from "./actiontypes";


const initialState={
    card:[],
    userId: null, //Can be user Email,Mobile Number
    mobile_number: null, //required for order place
    wishlist: [], //Array of objects
    cart: [], //Array of objects products->(image,brand,title,price,MRP,size,qty=1)
    address: {
        pincode: null,
        locality: null,
        city: null,
        state: null,
    },
    isLoading:false,
    isError:false
}

//set Default item Quantity as 1;
initialState.cart.map((items) => (items["item_quantity"] = 1));
//set Cart item id
initialState.cart.map((items) => (items["id"] = items.product_base_href));

const reducer=(state=initialState,action)=>{
    const {payload,type} = action
    switch(type){
        case types.LOAD_DATA:
            return {...state,isLoading:true}
        case types.GET_DATA:
            return {...state,card:payload}
        case types.ERROR_DATA:
            return {...state,isError:true}    
            case types.REMOVE_CART_ITEM:
                const updatedCart = state.cart.filter(
                  (item) => item.product_base_href !== payload
                );
                console.log("updatedCart:", updatedCart);
                return { ...state, cart: updatedCart };
          
              case types.ADD_TO_WISHLIST:
                const updatedWishList = [...state.wishlist, payload];
                return { ...state, wishlist: updatedWishList };
          
              case types.MODIFY_ITEM_QUANTITY:
                const updatedQuantity = state.cart.map((item) => {
                  if (item.product_base_href === payload.id) {
                    item.item_quantity = payload.quantity;
                  }
                  return item;
                });
                return { ...state, cart: updatedQuantity };
          
              case types.MODIFY_ITEM_SIZE:
                const updatedSize = state.cart.map((item) => {
                  if (item.product_base_href === payload.id) {
                    item.selected_size = payload.size;
                  }
                  return item;
                });
                return { ...state, cart: updatedSize };
          
              case types.ADD_CART_ITEM:
                const updatedCartList = [...state.cart, payload];
                return { ...state, cart: updatedCartList };
          
              case types.REMOVE_WISHLIST_ITEM:
                const newWishList = state.wishlist.filter(
                  (item) => item.product_base_href !== payload
                );
                return { ...state, wishlist: newWishList };
          
              case types.MAKE_CART_EMPTY:
                return { ...state, cart: [] };
          
              case types.UPDATE_ADDRESS:
                const { name, mobile, pincode, locality, city, state_ut } = payload;
                return {
                  ...state,
                  name: name,
                  mobile_number: mobile,
                  address: {
                    pincode: pincode,
                    locality: locality,
                    city: city,
                    state: state_ut,
                  },
                };    
        default:
            return state
    }


}

export{reducer}
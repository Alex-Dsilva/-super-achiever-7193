import {
     ERROR_DATA,
     GET_DATA,
     GET_DATA_FAILURE,
     GET_DATA_REQUEST,
     GET_DATA_SUCCESS,
     LOAD_DATA,
} from "./actiontypes";

const initialState = {
     card: [],
     product: [],
     isLoading: false,
     isError: false,
};

const reducer = (state = initialState, action) => {
     const { payload, type } = action;
     switch (type) {
          case LOAD_DATA:
               return { ...state, isLoading: true };
          case GET_DATA:
               return { ...state, card: payload };
          case ERROR_DATA:
               return { ...state, isError: true };
          case GET_DATA_REQUEST:
               return { ...state, isLoading: true };
          case GET_DATA_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    product: payload?.data,
               };
          case GET_DATA_FAILURE:
               return { ...state, isLoading: false, isError: true };
          default:
               return state;
     }
};

export { reducer };

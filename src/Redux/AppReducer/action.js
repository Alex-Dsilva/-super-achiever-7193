import axios from "axios";
import * as types from "./actiontypes";
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

import axios from "axios";
import * as types from "./actiontypes";
const getProduct = () => (dispatch) => {
     dispatch({ type: types.GET_DATA_REQUEST });

     return axios
          .get("http://localhost:8080/product")
          .then((r) =>
               dispatch({
                    type: types.GET_DATA_SUCCESS,
                    payload: r.data,
               })
          )
          .catch((e) => {
               dispatch({ type: types.GET_DATA_FAILURE, payload: e });
          });
};
export { getProduct };

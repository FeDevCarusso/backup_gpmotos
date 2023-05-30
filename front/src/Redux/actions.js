import axios from "axios";

//vars
const {REACT_APP_API_URL} = process.env 
//types
export const GET_ALL_REPUESTOS = "b447465d50208e62946813a51909c260";

//actions
export function getAllRepuestos() {
  return async function (dispatch) {
    const axiosResponse = await axios.get(`${REACT_APP_API_URL}/products`);
    const data = await axiosResponse.data;
    console.log(data)
    dispatch({
      type: GET_ALL_REPUESTOS,
      payload: data,
    });
  };
}

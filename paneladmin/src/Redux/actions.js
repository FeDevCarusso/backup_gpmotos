import axios from "axios";
const API_URL = "http://localhost:3001";

export const GET_ALL_SUPPLIES = "asdojubhasifhvadsivaipf1@";
export const getAllSupplies = () => {
  return async function (dispatch) {
    const axiosResponse = await axios.get(`${API_URL}/products`);
    const axiosData = await axiosResponse.data;

    return dispatch({
      type: GET_ALL_SUPPLIES,
      payload: axiosData,
    });
  };
};

export const GET_SUPPLIE_BY_ID = "fasdubgfhadiuap13341pojfad";
export function getSupplieById(id, empty = false) {
  if (empty === true)
    return {
      type: GET_SUPPLIE_BY_ID,
      payload: [],
    };

  return async function (dispatch) {
    const axiosResponse = await axios.get(`${API_URL}/products/${id}`);
    const axiosData = await axiosResponse.data;
    return dispatch({
      type: GET_SUPPLIE_BY_ID,
      payload: axiosData,
    });
  };
}

import axios from "axios";

const API_URL = "http://localhost:3001";

export async function isAuthenticated() {
  let isAuthenticated = false;

  await axios
    .get(`${API_URL}/checkauth`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.data === true) {
        isAuthenticated = true;
      }
    });

  return isAuthenticated;
}

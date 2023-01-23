import axios from "axios";
import { ENDPOINT } from "../../constants";

export const apiPost = async (data = {}) => {
  let config = {};

  if (localStorage.getItem("auth-token")) {
    config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    };
  }

  try {
    const res = await axios.post(ENDPOINT, data, config);

    if (res.data.errors?.length > 0) {
      throw res.data.errors[0].message;
    }

    return res.data;
  } catch (error) {
    throw error;
    console.log("====================================");
    console.log("an error has occured");
    console.log("====================================");
  }
};

export default apiPost;

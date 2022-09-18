import { ActionTypes } from "./Action-types";
import axios from "axios";
export const setStats = (stats) => {
  return { type: ActionTypes.SET_STATS, payload: stats };
};

// export const fetchData = () => async (dispatch) => {
//   const { data } = await axios.get(
//     "https://api.npoint.io/6711aa214455290ca33b"
//   );

//   return data;
// };

export const fetchData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.npoint.io/6711aa214455290ca33b`
    );

    dispatch({
      type: "FETCH",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

import * as actionTypes from "../constants/ReviewConstants";
import axios from "axios";

const url = "http://localhost:8000";

export const getProfileData = (username) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/profile/${username}`);
    await dispatch({
      type: actionTypes.ADD_REVIEW,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_REVIEW_ERROR,
      payload: error.response,
    });
  }
};

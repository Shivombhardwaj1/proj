import axios from "axios";

const url = 'http://localhost:8000';

export const bookAppointment = async (data) => {
  try {
    return await axios.post(`${url}/appointment`, data);
  } catch (error) {
    console.log("error calling wishlist api",error.response.data);
  }
};

export const RemoveWishlistData = async (name) => {
  try {
    return await axios.post(`${url}/RemoveWishlist`, name);
  } catch (error) {
    console.log("error calling wishlist api",error.response.data);
  }
};

export const importReviewData = async (data) => {
  try {
    return await axios.post(`${url}/review`, data);
  } catch (error) {
    console.log("error calling review api",error.response.data);
  }
};

export const RemoveReviewData = async (data) => {
  try {
    return await axios.post(`${url}/RemoveReview`, data);
  } catch (error) {
    console.log("error calling review remove api",error.response.data);
  }
};
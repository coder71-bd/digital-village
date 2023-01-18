import axios from "axios";
export const BASE_URI = "https://blushing-frog-skirt.cyclic.app";
// export const BASE_URI = 'http://localhost:5000';

// export default axios.create({
//   baseURL: BASE_URI,
// });
export default axios;

export const axiosPrivate = axios.create({
  // baseURL: BASE_URI,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

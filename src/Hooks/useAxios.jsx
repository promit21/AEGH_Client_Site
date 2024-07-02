import axios from "axios";
export const axiosPublic = axios.create({
  baseURL: "https://aegh-server.vercel.app",
});
const useAxios = () => {
  return axiosPublic;
};

export default useAxios;

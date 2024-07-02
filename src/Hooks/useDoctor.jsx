import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await axiosSecure.get("/doctors");
      return res.data;
    },
  });
  return [doctors, refetch];
};
export default useDoctor;

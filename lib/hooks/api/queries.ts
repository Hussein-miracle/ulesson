import axiosInstance from "@/lib/services/axiosInstance"
import { useQuery } from "@tanstack/react-query"

export const useGetStudents = () => {
  return useQuery({
    queryKey:["students-list"],
    queryFn: () => {
      return axiosInstance.get("/students")
    },
  })
}
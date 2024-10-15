import axiosInstance from "@/lib/services/axiosInstance"
import { Student } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"

export const useGetStudents = () => {
  return useQuery({
    queryKey:["students-list"],
    queryFn: (): Promise<Student[]> => {
      return axiosInstance.get("/students")
    },
  })
}
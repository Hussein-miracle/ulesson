import axiosInstance from "@/lib/services/axiosInstance";
import { ApiResponse, Student } from "@/lib/types";
import { errorToast } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetStudents = () => {
  return useQuery({
    queryKey: ["students-list"],
    queryFn: async (): Promise<ApiResponse<Student[]> | undefined> => {
      try {
        return axiosInstance.get("/students");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        errorToast(err?.message ?? "An error occured");
      }
    },
    select: (data) => data?.data,
  });
};


export const useGetStudentsById = (id: string) => {
  return useQuery({
    queryKey: ["student-by-id",id],
    queryFn: async (): Promise<ApiResponse<Student> | undefined> => {
      try {
        return axiosInstance.get(`/students?id=${id}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        errorToast(err?.message ?? "An error occured");
      }
    },
    select: (data) => data?.data,
    enabled: !isNaN(Number(id)) ?  true : false,
  });
};

import { queryClient } from "@/components/global-provider/global-provider";
import axiosInstance from "@/lib/services/axiosInstance";
import { AddStudent, ApiResponse, EditStudent, Student } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";

export const useDeleteStudent = () => {
  return useMutation({
    mutationKey: ["delete-student"],
    mutationFn: (id: string): Promise<ApiResponse<null>> => {
      return axiosInstance.delete(`/students`, {
        params: {
          id,
        },
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["students-list"] });
    },
  });
};

export const useEditStudent = () => {
  return useMutation({
    mutationKey: ["edit-student"],
    mutationFn: (details: {
      student: EditStudent;
      id: string | number;
    }):Promise<ApiResponse<null>> => {
      return axiosInstance.patch(
        `/students`,
        { ...details.student },
        {
          params: {
            id: details.id,
          },
        }
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["students-list"] });
    },
  });
};

export const useAddStudent = () => {
  return useMutation({
    mutationKey: ["add-student"],
    mutationFn: (details: AddStudent): Promise<ApiResponse<Student>> => {
      return axiosInstance.post(`/students/`, { ...details });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["students-list"] });
    },
  });
};

import axiosInstance from "@/lib/services/axiosInstance";
import { AddStudent, EditStudent, Student } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";

export const useDeleteStudent = () => {
  return useMutation({
    mutationKey: ["delete-student"],
    mutationFn: (student: Student) => {
      return axiosInstance.delete(`/students/${student.id}/`);
    },
  });
};

export const useEditStudent = () => {
  return useMutation({
    mutationKey: ["edit-student"],
    mutationFn: (details: {
      student: EditStudent;
      studentId: string | number;
    }) => {
      return axiosInstance.patch(`/students/${details.studentId}/`,{...details.student});
    },
  });
};

export const useAddStudent = () => {
  return useMutation({
    mutationKey: ["add-student"],
    mutationFn: (details:AddStudent) => {
      return axiosInstance.post(`/students/`,{...details});
    },
  });
};

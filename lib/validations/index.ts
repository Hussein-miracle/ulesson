import { z } from "zod";

export const student_edit_schema = z.object({
  name: z.string().min(1, "full name is required"),
  dob: z.string().min(1, "date of birth is required"),
  major: z.string().min(1, "major is required"),
  gpa: z
    .number({ required_error: "gpa is required", message: "gpa is required." })
    .min(0)
    .max(4),
  registrationNumber: z.string().min(1, "registration number is required"),
});

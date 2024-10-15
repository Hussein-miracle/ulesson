import { z } from "zod";

export const student_edit_schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  gpa: z.number().min(0).max(4).optional(),
  gender: z.enum(["male", "female", "other", ""]),
  level: z.string().min(1, "Level is required"),
  registrationNumber: z.string().min(1, "Registration number is required"),
});

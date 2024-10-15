import { z } from "zod";

export const edit_student_schema = z.object({
  name: z.string().min(1, "full name is required"),
  dob: z.string().min(1, "date of birth is required"),
  major: z.string().min(1, "major is required"),
  gpa: z
    .union([z.string(), z.number(), z.null(), z.undefined()])
    .refine((val) => !val || !isNaN(parseFloat(String(val))), {
      message: "GPA must be a number or empty",
    })
    .transform((val) => (!val ? undefined : parseFloat(String(val))))
    .pipe(
      z
        .number({
          required_error: "GPA is required",
          invalid_type_error: "GPA must be a number",
        })
        .min(0, { message: "GPA must be at least 0" })
        .max(5, { message: "Maximum GPA is 5" })
        .nonnegative({ message: "GPA should be a non-negative number" })
    )
    .optional(),
  registrationNumber: z.string().min(1, "registration number is required"),
});

export const add_student_schema = z.object({
  name: z.string().min(1, "full name is required"),
  dob: z.string().min(1, "date of birth is required"),
  major: z.string().min(1, "major is required"),
  gpa: z
    .union([z.string(), z.number(), z.null(), z.undefined()])
    .refine((val) => !val || !isNaN(parseFloat(String(val))), {
      message: "GPA must be a number or empty",
    })
    .transform((val) => (!val ? undefined : parseFloat(String(val))))
    .pipe(
      z
        .number({
          required_error: "GPA is required",
          invalid_type_error: "GPA must be a number",
        })
        .min(0, { message: "GPA must be at least 0" })
        .max(5, { message: "Maximum GPA is 5" })
        .nonnegative({ message: "GPA should be a non-negative number" })
    )
    .optional(),
  registrationNumber: z.string().min(1, "registration number is required"),
});

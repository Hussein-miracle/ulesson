import AppLayout from "@/components/layouts/app-layout/app-layout";
import Spacer from "@/components/spacer/spacer";
import { student_edit_schema } from "@/lib/validations";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React, { ReactElement} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import students from "@/data/students.json";
import PrimaryButton from "@/components/primary-button/primary-button";

const EditStudentPage = () => {
  const router = useRouter();
  const studentId = router.query["studentId"];

  console.log({studentId},"studentId")

  const {
    register,
    handleSubmit,
    formState: { errors },
    // getValues,
    setValue,
  } = useForm<z.infer<typeof student_edit_schema>>({
    defaultValues: {
      dob: "",
      gpa: undefined,
      registrationNumber: "",
      name: "",
      major: "",
    },
    resolver: zodResolver(student_edit_schema),
  });

  // const formValues = getValues();
  
  const onSubmit = async (values: z.infer<typeof student_edit_schema>) => {
    console.log({ values });
  };

  return (
    <section className=" w-full min-h-screen bg-white">
      <Text className="text-lg">Edit Student Details</Text>
      <Spacer size={6} />
      <Box className="w-full" as={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Flex className="flex flex-col gap-3">
          <FormControl isInvalid={!!errors.name?.message}>
            <FormLabel htmlFor="name">Full&nbsp;Name</FormLabel>
            <Input
              id="name"
              placeholder="full name"
              className="focus:border-primary-blue-100  border border-primary-blue-25"
              {...register("name")}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.major?.message}>
            <FormLabel htmlFor="major">Major</FormLabel>
            <Input
              id="major"
              placeholder="major"
              className="focus:border-primary-blue-100  border border-primary-blue-25"
              {...register("major")}
            />
            <FormErrorMessage>
              {errors.major && errors.major.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.gpa?.message}>
            <FormLabel htmlFor="gpa">GPA</FormLabel>
            <Input
              id="gpa"
              placeholder="gpa"
              // className="border-primary-blue-50"
              {...register("gpa")}
              type="number"
              minLength={1}
              step={"0.01"}
              max={5}
              onChange={(event) => {
                const value = event?.currentTarget?.value;
                setValue("gpa", parseFloat(value));
              }}
            />
            <FormErrorMessage>
              {errors.gpa && errors.gpa.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.registrationNumber?.message}>
            <FormLabel htmlFor="registrationNumber">
              Registration&nbsp;Number
            </FormLabel>
            <Input
              id="registrationNumber"
              placeholder="registration number"
              // className="border-primary-blue-50"
              {...register("registrationNumber")}
            />
            <FormErrorMessage>
              {errors.registrationNumber && errors.registrationNumber.message}
            </FormErrorMessage>
          </FormControl>

          <Flex className=" w-full justify-between items-center gap-4 ">
            <PrimaryButton type="submit">Save</PrimaryButton>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
};

EditStudentPage.getLayout = (page: ReactElement) => {
  return <AppLayout pageName="Add New Student">{page}</AppLayout>;
};

export default EditStudentPage;

import AppLayout from "@/components/layouts/app-layout/app-layout";
import Spacer from "@/components/spacer/spacer";
import { edit_student_schema } from "@/lib/validations";
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
import React, { ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import students from "@/data/students.json";
import PrimaryButton from "@/components/primary-button/primary-button";
import { useEditStudent } from "@/lib/hooks/api/mutations";
import { errorToast, sleep, successToast } from "@/lib/utils";
import { useGetStudentsById } from "@/lib/hooks/api/queries";
import Spinner from "@/components/spinner/spinner";

const EditStudentPage = () => {
  const router = useRouter();
  const id = router.query["id"] as string;

  // console.log({ id }, "id");

  const { data: student, isLoading: isLoadingStudent } =
  useGetStudentsById(id);
  
  const {mutateAsync:editStudent,isPending:isPendingEditStudent} = useEditStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<z.infer<typeof edit_student_schema>>({
    defaultValues: {
      dob: "",
      gpa: undefined,
      registrationNumber: "",
      name: "",
      major: "",
    },
    resolver: zodResolver(edit_student_schema),
  });

  const formValues = getValues();

  useEffect(() => {
    if(!!student){
      for(const key in student){
        if(key in formValues){
          setValue(key as keyof typeof formValues, student[key as keyof typeof formValues])
        }
      }
    }

  },[student])
  // const formValues = getValues();

  const onSubmit = async (values: z.infer<typeof edit_student_schema>) => {
    try {
      const response = await editStudent({student:values,id});
   //   console.log({response},"edit Student Response");
      if(response.status){
        successToast(response?.message as string);
        await sleep(300)
        router.push("/students");
      }
    } catch (error:any) {
      console.log("Error editting",error);
      errorToast(error?.message as string);
    }
  };

  return (
    <section className=" w-full min-h-screen bg-white p-6">
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

          <FormControl isInvalid={!!errors.dob?.message}>
            <FormLabel htmlFor="dob">Date&nbsp;Of&nbsp;Birth</FormLabel>
            <Input
              type="date"
              placeholder="Date Of Birth"
              // className="border-primary-blue-50"
              {...register("dob")}
            />
            <FormErrorMessage>
              {errors.dob && errors.dob.message}
            </FormErrorMessage>
          </FormControl>

          <Flex className=" w-full justify-between items-center gap-4 ">
            <PrimaryButton type="submit" disabled={isPendingEditStudent}>
              {isPendingEditStudent ? <Spinner/> : <span>Save</span>}
            </PrimaryButton>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
};

EditStudentPage.getLayout = (page: ReactElement) => {
  return <AppLayout pageName="Edit Student">{page}</AppLayout>;
};

export default EditStudentPage;

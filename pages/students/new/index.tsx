import AppLayout from '@/components/layouts/app-layout/app-layout'
import PrimaryButton from '@/components/primary-button/primary-button';
import Spacer from '@/components/spacer/spacer';
import { add_student_schema} from '@/lib/validations';
import { Flex, FormControl, FormLabel, FormErrorMessage,Text,Input } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const AddStudentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof add_student_schema>>({
    defaultValues: {
      dob: "",
      gpa: undefined,
      registrationNumber: "",
      name: "",
      major: "",
    },
    resolver: zodResolver(add_student_schema),
  });


  const onSubmit = async (values: z.infer<typeof add_student_schema>) => {
    console.log({ values },"add new student");
  };

  return (
    <section className=" w-full min-h-screen bg-white p-6 rounded-lg">
      <Text className="text-2xl">New Student </Text>
      <Spacer size={12} />

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
              // type="number"
              {...register("gpa")}
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
            <FormLabel htmlFor="dob">
              Date&nbsp;Of&nbsp;Birth
            </FormLabel>
            <Input
            type='date'
              placeholder="Date Of Birth"
              // className="border-primary-blue-50"
              {...register("dob")}
            />
            <FormErrorMessage>
              {errors.dob && errors.dob.message}
            </FormErrorMessage>
          </FormControl>

          <Flex className=" w-full justify-between items-center gap-4 ">
            <PrimaryButton type="submit">Save</PrimaryButton>
          </Flex>
        </Flex>
      </form>
    </section>
  )
}

AddStudentPage.getLayout = (page:ReactElement) => {
  return <AppLayout pageName='Add New Student'>{page}</AppLayout>
}


export default AddStudentPage;
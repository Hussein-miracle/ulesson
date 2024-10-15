"use client";

import { DownloadIcon, EditIcon, FileIcon } from "@/components/icons";
import AppLayout from "@/components/layouts/app-layout/app-layout";
import PrimaryButton from "@/components/primary-button/primary-button";
import Spacer from "@/components/spacer/spacer";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment, ReactElement, useMemo } from "react";
import Image from "next/image";
import students from "@/data/students.json";
import { useRouter } from "next/router";
import { Student } from "@/lib/types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { student_edit_schema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";


const DummyDocument = ({
  file_name = "Name.pdf",
}: {
  file_url?: string;
  file_name?: string;
}) => {
  return (
    <Box className=" bg-background border border-primary-blue-25 rounded-xl py-1.5 px-3">
      <Flex className=" justify-between items-center gap-4">
        <Box className="flex items-center">
          <FileIcon />
          &nbsp;<Text>{file_name}</Text>
        </Box>
        <Box className=" cursor-pointer">
          <DownloadIcon />
        </Box>
      </Flex>
    </Box>
  );
};

const StudentDetailsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const studentId = router.query['studentId'];


  const student = useMemo(() => {
    const found = students.find((s) => s.id === studentId);

    return (found as Student) ?? null;
  }, [studentId]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<z.infer<typeof student_edit_schema>>({
    defaultValues: {
      dob: "",
      gpa: undefined,
      registrationNumber: "",
      name:"",
      major:"",
    },
    resolver: zodResolver(student_edit_schema),
  });

  const formValues = getValues();

  const handleOpenEditModal = (student_details: Student) => {
    for (const key in student_details) {
      if (key in formValues) {
        setValue(
          key as keyof z.infer<typeof student_edit_schema>,
          student_details[key as keyof Student]
        );
      }
    }

    onOpen();
  };

  const onSubmit = async (values: z.infer<typeof student_edit_schema>) => {
    console.log({values});
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col gap-3">
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
                value={formValues.gpa}
                onChange={(event)=>{
                  const value = event?.currentTarget?.value;

                  setValue("gpa", parseFloat(value));
                }}
              />
              <FormErrorMessage>
                {errors.gpa && errors.gpa.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.registrationNumber?.message}>
              <FormLabel htmlFor="registrationNumber">Registration&nbsp;Number</FormLabel>
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
          </ModalBody>

          <ModalFooter className=" w-full justify-between items-center gap-4 ModalFooter ">
            <PrimaryButton
              variant="grey"
              onClick={onClose}
              className=" border-primary-blue-50 border text-primary-blue-100"
            >
              Close
            </PrimaryButton>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <section className=" w-full min-h-screen  border-primary-blue-25 bg-white rounded-xl p-6">
        <Box
          className="w-full"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Spacer axis="horizontal" />
          <PrimaryButton
            className="px-4 py-2 gap-2 rounded-xl"
            onClick={() => {
              handleOpenEditModal(student!);
            }}
          >
            <EditIcon />
            <span>Edit&nbsp;Student</span>
          </PrimaryButton>
        </Box>

        <Spacer size={12} />

        <Box className="w-full">
          <Box>
            <Text className="text-lg">Student&nbsp;Profile</Text>
            <Spacer size={6} />
            <Flex
              className=" w-full bg-white border border-primary-blue-25 rounded-2xl p-4"
              gap={"16px"}
            >
              <Box
                className="bg-background rounded-xl overflow-hidden "
                width={"400px"}
                height={"200px"}
              >
                <Image
                  src="/student-image.png"
                  alt="Student image"
                  className="w-full h-full object-cover object-left-top"
                  height={140}
                  width={140}
                />
              </Box>

              <Flex className="flex flex-wrap gap-6">
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">
                    ID&nbsp;NO:
                  </Text>
                  <Text className=" text-text-shade-75 font-medium">
                    {student?.id}
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">
                    FullName
                  </Text>
                  <Text className=" text-text-shade-75 font-medium">
                    {student?.name}
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">
                    Date&nbsp;Of&nbsp;Birth
                  </Text>
                  <Text className=" text-text-shade-75 font-medium">
                    {student?.dob}
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">
                    Gender
                  </Text>
                  <Text className=" text-text-shade-75 font-medium">
                    N/A
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">Level</Text>
                  <Text className=" text-text-shade-75 font-medium  capitalize">
                    N/A
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">
                    Registration&nbsp;Number
                  </Text>
                  <Text className=" text-text-shade-75 font-medium  capitalize">
                    {student?.registrationNumber}
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">GPA</Text>
                  <Text className=" text-text-shade-75 font-medium  capitalize">
                    {student?.gpa}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Spacer size={16} />
          <Box>
            <Text className="text-lg">Documents&nbsp;Submitted</Text>
            <Spacer size={6} />
            <Box>
              <Flex
                className="flex-col w-full bg-white border border-primary-blue-25 rounded-xl p-4"
                gap={"16px"}
              >
                <Grid templateColumns={"repeat(2,1fr)"} className="gap-4">
                  <Text>Birth&nbsp;Certificate</Text>
                  <DummyDocument
                    file_name={`${student?.name}-birth_certificate.PDF`}
                  />
                </Grid>
                <Grid templateColumns={"repeat(2,1fr)"} className="gap-4">
                  <Text>Health&nbsp;Certificate</Text>
                  <DummyDocument
                    file_name={`${student?.name}-health_certificate.PDF`}
                  />
                </Grid>
                <Grid templateColumns={"repeat(2,1fr)"} className="gap-4">
                  <Text>LGA&nbsp;Certificate</Text>
                  <DummyDocument
                    file_name={`${student?.name}-lga_certificate.PDF`}
                  />
                </Grid>
              </Flex>
            </Box>
          </Box>
        </Box>
      </section>
    </Fragment>
  );
};

StudentDetailsPage.getLayout = (page: ReactElement) => {
  return <AppLayout pageName="Student Details">{page}</AppLayout>;
};

export default StudentDetailsPage;

"use client";

import {
  DownloadIcon,
  EditIcon,
  FileIcon,
  TrashIcon,
} from "@/components/icons";
import AppLayout from "@/components/layouts/app-layout/app-layout";
import PrimaryButton from "@/components/primary-button/primary-button";
import Spacer from "@/components/spacer/spacer";
import {
  Box,
  Flex,
  Grid,
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
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure();

  const router = useRouter();
  const studentId = router.query["studentId"];


  const student = useMemo(() => {
    const found = students.find((s) => s.id === studentId);

    return (found as Student) ?? null;
  }, [studentId]);



  // const handleOpenEditModal = (student_details: Student) => {
  //   for (const key in student_details) {
  //     if (key in formValues) {
  //       setValue(
  //         key as keyof z.infer<typeof edit_student_schema>,
  //         student_details[key as keyof Student]
  //       );
  //     }
  //   }

  //   onOpen();
  // };



  const handleDeleteStudent = async () => {
    if(!student){
      return;
    }

    router.push("/students");
  };

  return (
    <Fragment>
      <Modal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete&nbsp;Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text className=" text-text-shade-50 text-center ">Are you sure you want to delete this student - <Text className=" font-semibold text-text-shade-100 inline">{student?.name}</Text> ?</Text>
          </ModalBody>

          <ModalFooter className=" w-full justify-between items-center gap-4 ModalFooter ">
            <PrimaryButton
              variant="grey"
              onClick={onCloseDeleteModal}
              className=" border-primary-blue-50 border text-primary-blue-100"
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton
              className=" bg-black text-white hover:text-red-500 hover:scale-105 delay-75 ease-in-out duration-15 "
              onClick={handleDeleteStudent}
            >
              Delete
            </PrimaryButton>
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
          <Flex className=" gap-2 items-center">
            <PrimaryButton
              className="bg-accent-red text-white px-4 py-2 gap-2 rounded-xl"
              onClick={onOpenDeleteModal}
            >
              <TrashIcon className=" text-white size-5" />
              <span>Delete&nbsp;Student</span>
            </PrimaryButton>
            <PrimaryButton
              className="px-4 py-2 gap-2 rounded-xl"
              onClick={() => {
                router.push(`/students/${studentId}/edit`);
              }}
            >
              <EditIcon className=" size-5" />
              <span>Edit&nbsp;Student</span>
            </PrimaryButton>
          </Flex>
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
                  <Text className=" text-text-shade-75 font-medium">N/A</Text>
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

"use client";

import { DownloadIcon, EditIcon, FileIcon } from "@/components/icons";
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
import React, { Fragment, ReactElement, useMemo, useState } from "react";
import Image from "next/image";
import students from "@/data/students.json";
import { useRouter } from "next/router";
import { generateRandomNumber } from "@/lib/utils";
import { Student } from "@/lib/types";

const randomNum = generateRandomNumber(1, 10);

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
  const [studentEditDetails, setStudentEditDetails] =
    useState<Partial<Student> | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const query = router.query;

  console.log({ query });

  const student = useMemo(() => {
    const found = students.find((s) => s.id === query.studentId);

    return (found as Student) ?? null;
  }, [query.studentId]);

  console.log({ student }, "Studentg");

  const handleOpenEditModal = (student_details: Student) => {
    setStudentEditDetails(student_details);
    onOpen();
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/*  */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            culpa excepturi harum commodi ipsa, quam dolorem voluptatem natus
            ratione fuga libero soluta alias rem deleniti incidunt placeat
            magnam exercitationem beatae.
          </ModalBody>

          <ModalFooter>
            <PrimaryButton variant="grey" onClick={onClose}>
              Close
            </PrimaryButton>
            <PrimaryButton>Secondary Action</PrimaryButton>
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
                    {randomNum >= 5 ? "Male" : "Female"}
                  </Text>
                </Box>
                <Box className=" grid grid-cols-2 gap-4">
                  <Text className=" text-text-shade-50 font-normal">Level</Text>
                  <Text className=" text-text-shade-75 font-medium  capitalize">
                    {randomNum < 5 ? "100 level" : "200 level"}
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

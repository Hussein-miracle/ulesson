""
import AppLayout from "@/components/layouts/app-layout/app-layout";
import { Box, Flex, Wrap } from "@chakra-ui/react";
import React, { ReactElement, useEffect } from "react";
import students from "@/data/students.json";
import { Student } from "@/lib/types";
import StudentItem from "@/components/student-item/student-item";
import PrimaryButton from "@/components/primary-button/primary-button";
import Spacer from "@/components/spacer/spacer";
import { PlusIcon, SearchIcon } from "@/components/icons";
import { useRouter } from "next/router";

const StudentPage = (...props: unknown[]) => {
  const router = useRouter();
  console.log({ props }, "StudentPage");
  useEffect(() => {}, []);

  return (
    <section className=" w-full min-h-screen border-primary-blue-25 bg-white rounded-xl p-6">
      <Box
        className="w-full"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Spacer axis="horizontal" />
        <PrimaryButton variant="grey" className="px-4 py-2 gap-2 rounded-xl"         onClick={() => {
                router.push(`/students/new`);
              }}>
          <span>Add&nbsp;Student</span>
          <PlusIcon />
        </PrimaryButton>
      </Box>

      <Spacer size={12} />

      <Box
        className="w-full"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        <Spacer axis="horizontal" />
        <Flex className=" flex items-center gap-4">
          <Box
            className="relative overflow-hidden rounded-xl bg-background h-10"
            width={"150px"}
          >
            <input
              className=" w-full h-full px-2 py-1 outline-none border-none bg-transparent rounded-xl"
              placeholder="Search student"
            />

            <SearchIcon className=" select-none pointer-events-none absolute top-2.5 right-2" />
          </Box>
        </Flex>
      </Box>
      <Spacer size={12} />

      <Wrap className="flex-wrap flex" spacing={"24px"}>
        {students.map((student) => {
          return <StudentItem student={student as Student} key={student.id} />;
        })}
      </Wrap>
    </section>
  );
};

StudentPage.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default StudentPage;

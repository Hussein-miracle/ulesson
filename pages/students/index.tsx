("");
import AppLayout from "@/components/layouts/app-layout/app-layout";
import { Box, Wrap, Text } from "@chakra-ui/react";
import React, { ReactElement, useMemo, useState } from "react";
import StudentItem, {
  StudentItemSkeleton,
} from "@/components/student-item/student-item";
import PrimaryButton from "@/components/primary-button/primary-button";
import Spacer from "@/components/spacer/spacer";
import { PlusIcon, SearchIcon } from "@/components/icons";
import { useRouter } from "next/router";
import { useGetStudents } from "@/lib/hooks/api/queries";

const StudentPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const { data: studentsData, isLoading: isLoadingStudents } = useGetStudents();

  // console.log({ students }, "studds");

  const students = useMemo(() => {
    return studentsData?.filter((st) => {
      return (
        st.major?.toLowerCase().includes(query?.toLowerCase()) ||
        st.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, studentsData]);

  return (
    <section className=" w-full min-h-screen border-primary-blue-25 bg-white rounded-xl p-6">
      <Box
        className="w-full  flex-wrap"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        <Box
          className="relative overflow-hidden rounded-xl bg-background h-10"
          width={"350px"}
        >
          <input
            className=" w-full h-full px-2 py-1 outline-none border-none bg-transparent rounded-xl"
            placeholder="Search student"
            value={query}
            onChange={(ev) => {
              const value = ev.target.value;
              setQuery(value);
            }}
          />

          <SearchIcon className=" select-none pointer-events-none absolute top-2.5 right-2" />
        </Box>
        <PrimaryButton
          className="px-4 py-2 gap-2 rounded-xl"
          onClick={() => {
            router.push(`/students/new/`);
          }}
        >
          <span>Add&nbsp;Student</span>
          <PlusIcon />
        </PrimaryButton>
      </Box>
      <Spacer size={24} />

      {!isLoadingStudents && !!students && students?.length > 0 && (
        <Wrap className="flex-wrap flex" spacing={"24px"}>
          {students?.map((student) => {
            return <StudentItem student={student} key={student.id} />;
          })}
        </Wrap>
      )}

      {isLoadingStudents && (
        <>
          <Wrap className="flex-wrap flex" spacing={"24px"}>
            <StudentItemSkeleton />
            <StudentItemSkeleton />
            <StudentItemSkeleton />
            <StudentItemSkeleton />
            <StudentItemSkeleton />
            <StudentItemSkeleton />
          </Wrap>
        </>
      )}
      {!isLoadingStudents && !!students && students?.length <= 0 && (
        <Box className="w-full flex items-center justify-center">
          <Text className=" text-center w-full text-text-shade-100 font-bold text-2xl mx-auto">
            No Students
          </Text>
        </Box>
      )}
    </section>
  );
};

StudentPage.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default StudentPage;

import Link from "next/link";
import { WrapItem, Box, Flex, Text } from "@chakra-ui/react";
import { ArrowRight } from "../icons";
import { Student } from "@/lib/types";

interface StudentItemProps {
  student?: Student;
}

const StudentItem = ({ student }: StudentItemProps) => {
  return (
    <WrapItem className=" w-fit h-fit">
      <Box
        className=" border border-primary-blue-25 rounded-xl bg-white overflow-hidden"
        h={"200px"}
        w={"341px"}
      >
        <Box className=" h-14 w-full bg-table px-4 py-2.5 flex items-center justify-between border-b border-b-primary-blue-25">
          <Flex className="flex items-center gap-4">
            <Box
              className=" rounded-full  bg-slate-300 "
              h={"38px"}
              w={"38px"}
            />
            <Text className="text-text-shade-75 font-medium text-base">
              {student?.name}
            </Text>
          </Flex>
          <Link className=" group" href={`/students/${student?.id}`}>
            <Flex gap={0.5} alignItems={"center"}>
              <Text className=" text-text-shade-50 group-hover:text-primary-blue-75 delay-75 ease-in-out duration-150 text-sm font-semibold ">
                View
              </Text>
              <ArrowRight className="h-3 w-3 text-text-shade-50 group-hover:text-primary-blue-75 group-hover:translate-x-1 mt-0.5  duration-200 ease-in-out " />
            </Flex>
          </Link>
        </Box>

        <Box className=" h-full px-4 pt-3 pb-4 w-full flex flex-col gap-2">
          <Flex className="flex items-center justify-between w-full">
            <Text className=" text-text-shade-75 text-base ">Major</Text>
            <Text className=" whitespace-nowrap text-base font-semibold text-text-shade-75">
              {student?.major}
            </Text>
          </Flex>
          <Flex className="flex items-center justify-between w-full">
            <Text className=" text-text-shade-75 text-base ">GPA</Text>
            <Text className=" whitespace-nowrap text-base font-semibold text-text-shade-75">
              {student?.gpa}
            </Text>
          </Flex>
          <Flex className="flex items-center justify-between w-full">
            <Text className=" text-text-shade-75 text-base ">
              Registration&nbsp;Number
            </Text>
            <Text className=" whitespace-nowrap text-base font-semibold text-text-shade-75">
              {student?.registrationNumber}
            </Text>
          </Flex>
          <Flex className="flex items-center justify-between w-full">
            <Text className=" text-text-shade-75 text-base ">
              Date&nbsp;Of&nbsp;Birth
            </Text>
            <Text className=" whitespace-nowrap text-base font-semibold text-text-shade-75">
              {student?.dob}
            </Text>
          </Flex>
        </Box>
      </Box>
    </WrapItem>
  );
};

export default StudentItem;

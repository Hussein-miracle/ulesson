import NextImage from "next/image";
import React from "react";
import { cn, replaceHyphenWithSpace } from "@/lib/utils";
import { useRouter } from "next/router";
import { BellIcon, ChevronLeftIcon } from "@/components/icons";


interface StudentHeaderProps {
  children?: React.ReactNode;
  pageName?:string
}

const StudentHeader = ({pageName}: StudentHeaderProps) => {
  const appRouter = useRouter();
  // const query = appRouter.query;
  const pathname = appRouter.pathname;
  // console.log({ pathname },"PATHNAME");
  // console.log({ query },"QUERY");
  const pagename = pathname?.split("/")?.at(-1) as string;

  const handleBack = () => {
    appRouter.back();
  };
  return (
    <header className="w-full h-[5.45rem] border border-primary-blue-25 border-solid rounded-xl py-5 px-6 bg-white flex flex-row items-center justify-between">
      <div className="h-full flex flex-col items-start justify-between">
        {pagename?.toLowerCase() !== "dashboard" && (
          <div
            className="flex items-center justify-start gap-1 cursor-pointer"
            onClick={handleBack}
          >
            <ChevronLeftIcon /> <span>Back</span>
          </div>
        )}
        <h4
          className={cn(
            " text-text-shade-75 text-sm font-normal leading-[18.2px] tracking-[1%] capitalize",
            pagename?.toLowerCase() !== "dashboard" &&
              " font-bold text-xl/[26px] tracking-[1%]",
          )}
        >
          {pageName ? pageName : replaceHyphenWithSpace(pagename)}
        </h4>
        {pagename?.toLowerCase() === "dashboard" && (
          <h2 className=" text-text-shade-100 text-xl font-bold leading-5 tracking-[1%]">
            Welcome back, Wahab
          </h2>
        )}
      </div>

      <div className="flex items-center gap-3 justify-between h-full">
        <div className=" rounded-full h-9 w-9 overflow-hidden flex items-center justify-center bg-background">
          <BellIcon />
        </div>
        <div className=" rounded-full h-9 w-9 overflow-hidden flex items-center justify-center bg-background">
          <NextImage
            width={36}
            height={36}
            title="Profile Image"
            alt="Profile Image"
            src={"/profile-image.png"}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-2  self-center">
          <h2 className=" text-text-shade-100 text-sm font-bold leading-[18.2px] tracking-[1%]">
            Mr.Midoriya Aizen
          </h2>
          <h4 className=" text-text-shade-75 text-xs font-normal leading-4 tracking-[1%]">
            Lecturer
          </h4>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;

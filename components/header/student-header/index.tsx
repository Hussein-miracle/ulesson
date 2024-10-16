import NextImage from "next/image";
import React, { Fragment, useRef, useState } from "react";
import { cn, replaceHyphenWithSpace } from "@/lib/utils";
import { useRouter } from "next/router";
import { BellIcon, ChevronLeftIcon, MenuIcon } from "@/components/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { navigations } from "@/data";
import Link from "next/link";
interface StudentHeaderProps {
  children?: React.ReactNode;
  pageName?: string;
}

const StudentHeader = ({ pageName }: StudentHeaderProps) => {
  const [showMenu,setShowMenu] = useState<boolean>(false);
  const appRouter = useRouter();
  // const query = appRouter.query;
  const pathname = appRouter.pathname;
  // console.log({ pathname },"PATHNAME");
  // console.log({ query },"QUERY");
  const pagename = pathname?.split("/")?.at(-1) as string;

  const btnRef = useRef(null);

  const handleBack = () => {
    appRouter.back();
  };

  const handleToggle = () => {
    setShowMenu(!showMenu);
  }
  return (
    <Fragment>
      <header className="w-full h-[5.45rem] border border-primary-blue-25 border-solid rounded-xl py-5 px-6 bg-white flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="lg:hidden bg-transparent outline-none border-none flex flex-col" ref={btnRef} onClick={handleToggle}>
            <MenuIcon />
          </button>

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
                  " font-bold text-xl/[26px] tracking-[1%]"
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

      <Drawer
        isOpen={showMenu}
        placement="left"
        onClose={handleToggle}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay className=" w-screen h-screen min-h-screen" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto pl-6 pr-5 py-6 custom-scroll border-solid">
              <div className="flex h-[104px] w-full rounded-2xl shrink-0 items-center justify-center bg-background">
                <span className=" text-xl">uLesson</span>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
                  <li className="w-full">
                    <ul
                      role="list"
                      className="space-y-1 flex w-full flex-col gap-y-3"
                    >
                      {navigations.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              handleToggle();
                            }}
                            className={cn(
                              pathname.startsWith(item.href)
                                ? "bg-primary-blue-100 text-neutral-white "
                                : "text-text-shade-75 bg-transparent",
                              "group flex items-center gap-x-1.5 px-6 py-3 text-sm font-semibold leading-6 hover:bg-primary-blue-100 hover:text-neutral-white transition-colors duration-150 ease-in-out rounded-xl"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={cn(
                                pathname.startsWith(item.href)
                                  ? "text-white"
                                  : "text-text-shade-75  ",
                                "h-5 w-5 shrink-0 group-hover:text-neutral-white transition-colors duration-150 ease-in-out"
                              )}
                            />
                            <span className="font-medium text-base ">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default StudentHeader;

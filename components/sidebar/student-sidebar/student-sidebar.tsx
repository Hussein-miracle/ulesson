import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment, ReactNode} from "react";
import { AppSVGProps, DashboardIcon, UserProfilesIcon } from "../../icons";
import { useRouter } from "next/router";



const navigations: {
  name: string;
  href: string;
  icon: (props: AppSVGProps) => ReactNode;
}[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Students",
    href: "/students",
    icon: UserProfilesIcon,
  },
];

const StudentSidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  console.log({pathname})

  return (
    <Fragment>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[15.25rem] lg:flex-col  ">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto pl-6 pr-5 py-6 custom-scroller bg-white border-r border-primary-blue-25 border-solid">
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
                        className={cn(
                          pathname.startsWith(item.href)
                            ? "bg-primary-blue-100 text-neutral-white "
                            : "text-text-shade-75 bg-transparent",
                          "group flex items-center gap-x-1.5 px-6 py-3 text-sm font-semibold leading-6 hover:bg-primary-blue-100 hover:text-neutral-white transition-colors duration-150 ease-in-out rounded-xl",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={cn(
                            pathname.startsWith(item.href)
                              ? "text-white"
                              : "text-text-shade-75  ",
                            "h-5 w-5 shrink-0 group-hover:text-neutral-white transition-colors duration-150 ease-in-out",
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
      </div>
    </Fragment>
  );
};

export default StudentSidebar;

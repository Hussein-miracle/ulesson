import { AppSVGProps, DashboardIcon, UserProfilesIcon } from "@/components/icons";
import { ReactNode } from "react";

export const navigations: {
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
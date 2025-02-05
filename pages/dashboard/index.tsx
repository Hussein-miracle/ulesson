import AppLayout from "@/components/layouts/app-layout/app-layout";
import localFont from "next/font/local";
import Link from "next/link";
import { ReactElement } from "react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Dashboard() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Link href={"/students"}>Go To Students Page</Link>
    </div>
  );
}

Dashboard.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

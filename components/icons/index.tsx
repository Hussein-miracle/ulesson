import { cn } from "@/lib/utils";
import { SVGAttributes } from "react";



export type AppSVGProps = SVGAttributes<SVGSVGElement>;

export const ChevronLeftIcon = (props: AppSVGProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5999 11.2L6.3999 8.00001L9.5999 4.80001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BellIcon = (props: AppSVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 20.6302C9.79613 21.2332 10.8475 21.5999 12 21.5999C13.1525 21.5999 14.2039 21.2332 15 20.6302M3.57109 17.5271C3.09677 17.5271 2.83186 16.8206 3.11877 16.4281C3.78453 15.5173 4.42712 14.1814 4.42712 12.5727L4.45458 10.2417C4.45458 5.91078 7.83278 2.3999 12 2.3999C16.2286 2.3999 19.6566 5.9625 19.6566 10.3572L19.6291 12.5727C19.6291 14.1924 20.2495 15.5356 20.8882 16.4468C21.164 16.8403 20.8984 17.5271 20.43 17.5271H3.57109Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DashboardIcon = ({className,...props}: AppSVGProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#333333]", className)}
      {...props}
    >
      <path
        d="M6 14.5H14M9.38184 2.18771L2.44851 6.87647C2.16713 7.06676 2 7.3748 2 7.70316V16.4784C2 17.3188 2.71634 18 3.6 18H16.4C17.2837 18 18 17.3188 18 16.4784V7.70316C18 7.3748 17.8329 7.06676 17.5515 6.87647L10.6182 2.18771C10.2481 1.93743 9.75193 1.93743 9.38184 2.18771Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserProfilesIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#333333]", className)}
      {...props}
    >
      <path
        d="M16 11.4048C17.0561 12.1939 18 14.1806 18 15.4047C18 15.7861 17.7218 16.0953 17.3785 16.0953H17M13 8.17043C13.6832 7.77522 14.1429 7.03654 14.1429 6.1905C14.1429 5.34446 13.6832 4.60578 13 4.21057M2.62148 16.0953H13.569C13.9122 16.0953 14.1905 15.7861 14.1905 15.4047C14.1905 13.0076 12.1878 11.0643 8.09524 11.0643C4.00272 11.0643 2 13.0076 2 15.4047C2 15.7861 2.27824 16.0953 2.62148 16.0953ZM10.381 6.1905C10.381 7.45286 9.3576 8.47621 8.09524 8.47621C6.83287 8.47621 5.80952 7.45286 5.80952 6.1905C5.80952 4.92813 6.83287 3.90479 8.09524 3.90479C9.3576 3.90479 10.381 4.92813 10.381 6.1905Z"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

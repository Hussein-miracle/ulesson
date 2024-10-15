import { cn } from "@/lib/utils";
import { SVGAttributes } from "react";

export type AppSVGProps = SVGAttributes<SVGSVGElement>;

export const FileIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" text-[#006DFF]", className)}
      {...props}
    >
      <path
        d="M15.0001 2.40002V6.00002C15.0001 6.66277 15.5373 7.20002 16.2001 7.20002H19.8001M8.40008 7.20002H10.8001M8.40008 10.8H15.6001M8.40008 14.4H15.6001M18.0001 4.20002C17.466 3.72217 16.9118 3.1554 16.5619 2.7873C16.3291 2.54236 16.0074 2.40002 15.6695 2.40002H6.5998C5.27432 2.40002 4.19981 3.47453 4.1998 4.80001L4.19971 19.2C4.1997 20.5254 5.27421 21.6 6.5997 21.6L17.3997 21.6C18.7252 21.6 19.7997 20.5255 19.7998 19.2001L19.8001 6.47786C19.8001 6.17102 19.683 5.87606 19.4701 5.65516C19.0763 5.24667 18.4187 4.57454 18.0001 4.20002Z"
          stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const DownloadIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" text-[#006DFF]", className)}
      {...props}
    >
      <path
        d="M3.6001 15.2199L3.6001 18.9257C3.6001 19.4874 3.82135 20.026 4.21517 20.4231C4.609 20.8203 5.14314 21.0434 5.7001 21.0434H18.3001C18.8571 21.0434 19.3912 20.8203 19.785 20.4231C20.1788 20.026 20.4001 19.4874 20.4001 18.9257V15.2199M12.0013 2.95667V14.9567M12.0013 14.9567L16.8013 10.3715M12.0013 14.9567L7.20127 10.3715"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ArrowRight = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" text-[#03A1DB]", className)}
      {...props}
    >
      <path
        d="M9.16667 1.5L15 7.5M15 7.5L9.16667 13.5M15 7.5L1 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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

export const DashboardIcon = ({ className, ...props }: AppSVGProps) => {
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
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const PlusIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#595959]", className)}
      {...props}
    >
      <path
        d="M8.00001 3.69995L8.00001 13.3M12.8 8.49995L3.20001 8.49995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const SearchIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#595959]", className)}
      {...props}
    >
      <path
        d="M11.2846 11.86L13.6 14.1M12.8534 8.12669C12.8534 11.0133 10.5133 13.3534 7.62669 13.3534C4.74008 13.3534 2.40002 11.0133 2.40002 8.12669C2.40002 5.24008 4.74008 2.90002 7.62669 2.90002C10.5133 2.90002 12.8534 5.24008 12.8534 8.12669Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const EditIcon = ({ className, ...props }: AppSVGProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-white", className)}
      {...props}
    >
      <path
        d="M11.0487 3.85156H5.04873C3.06051 3.85156 1.44873 5.46333 1.44873 7.45156V19.4517C1.44873 21.4399 3.06051 23.0517 5.04873 23.0517H17.0487C19.037 23.0517 20.6487 21.4399 20.6487 19.4517L20.6487 13.4516M7.44873 17.0516L11.8147 16.1718C12.0465 16.1251 12.2593 16.011 12.4264 15.8438L22.2001 6.06474C22.6687 5.59588 22.6684 4.83589 22.1994 4.36743L20.129 2.29936C19.6602 1.83109 18.9006 1.83141 18.4322 2.30007L8.65749 12.0801C8.49068 12.247 8.37678 12.4594 8.33003 12.6907L7.44873 17.0516Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

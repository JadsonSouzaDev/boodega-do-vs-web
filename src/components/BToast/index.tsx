import { SuccessIcon, AlertIcon, ErrorIcon } from "./Icons";
import 'animate.css';

type BToastType = {
  type: "success" | "alert" | "error";
  text: string;
};

const Icons = {
  success: <SuccessIcon />,
  alert: <AlertIcon />,
  error: <ErrorIcon />,
};

const BToast = ({ type, text }: BToastType) => {
  return (
    <div role="alert" id="toast" className="absolute top-14 animate__animated animate__slideInDown">
      <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
        {Icons[type]}
        <div className="ml-3 text-sm font-normal">{text}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            fill="none"
            aria-hidden="true"
            className="w-3 h-3"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BToast;

import clsx from "clsx";

const varients = {
  primary: "",
  secoundary: "",
  success: "",
  warning: "",
  danger: "",
  info: "",
  light: "",
  dard: "",
};
const sizes = {
  sm: "px-2 h-8 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-4 text-lg"
};
const common = "border rounded- border-gray-400";
export const Button = ({ size = 'sm', varient = 'light', className, children }) => {
  return (<button className={clsx(sizes[size], common, className)}>{children}</button>);
};

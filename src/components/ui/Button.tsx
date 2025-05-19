import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  let styles = "p-2 rounded-md shadow-sm focus:outline-none";
  if (variant === "primary") {
    styles += " bg-gray-800 hover:bg-gray-900 text-white font-semibold";
  } else if (variant === "secondary") {
    styles += " bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold";
  } else if (variant === "tertiary") {
    styles += " bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold";
  } else {
    styles += "   text-gray-800 font-semibold";
  }
  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

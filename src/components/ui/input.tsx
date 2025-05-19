import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
}

// Use forwardRef to pass the ref to the input element
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref} // Attach the ref here
        className={`border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; // Add a display name for debugging purposes

export default Input;

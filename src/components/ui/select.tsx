import { forwardRef, SelectHTMLAttributes } from "react";

type Option = Record<string, string | number>;

type SelectProps = {
  options: Option[];
  defaultLabel?: string;
  optionLabelKey?: string;
  optionValueKey?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

// Use forwardRef to pass the ref to the select element
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      defaultLabel = "Select an Option",
      options,
      optionLabelKey = "name",
      optionValueKey = "id",
      ...rest
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className="border hover:cursor-pointer border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        defaultValue=""
        {...rest}
      >
        <option disabled value="">
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option key={option[optionValueKey]} value={option[optionValueKey]}>
            {option[optionLabelKey]}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;

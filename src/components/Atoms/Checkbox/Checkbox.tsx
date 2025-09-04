import React from "react";
import { cn } from "../../../utils/cn";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  onChange,
  error,
  disabled = false,
  id,
  name,
  className,
}) => {
  const checkboxId = id || name || label?.toLowerCase().replace(/\s/g, "-");

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        className={cn(
          "inline-flex items-center cursor-pointer",
          disabled && "cursor-not-allowed"
        )}
        htmlFor={checkboxId}
      >
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            "form-checkbox h-5 w-5 text-indigo-600 transition",
            error ? "border-red-500" : "",
            disabled && "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        />
        {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
      </label>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

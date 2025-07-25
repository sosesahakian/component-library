import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { Input as ShadcnInput } from "../ui/input";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  variant?: "standard" | "floating";
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  id,
  name,
  variant = "standard",
}: InputProps) => {
  const inputId = id || name || label?.toLowerCase().replace(/\s/g, "-");

  const [focused, setFocused] = useState(false);

  const isFloating = variant === "floating";

  if (isFloating) {
    return (
      <div className="relative w-full">
        <ShadcnInput
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            onChange?.(e);
          }}
          className={cn(
            "peer block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 pt-6 pb-2 text-sm placeholder-transparent transition-all",
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-indigo-500",
            disabled && "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-3 top-2 text-sm text-indigo-500 transition-all px-1 bg-gray-50",
              focused || value
                ? "scale-90 -translate-y-2.5"
                : "translate-y-3 scale-100"
            )}
          >
            {label}
          </label>
        )}
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <ShadcnInput
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          error ? "border-red-500" : "",
          disabled && "bg-gray-100 text-gray-400 cursor-not-allowed"
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

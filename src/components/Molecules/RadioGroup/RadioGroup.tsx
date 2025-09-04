import React from "react";
import {
  RadioGroup as UiRadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  direction?: "row" | "col";
}

export const CustomRadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  className,
  direction = "col",
}) => {
  return (
    <UiRadioGroup
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      name={name}
      className={[
        className,
        direction === "row" ? "flex flex-row gap-4" : "flex flex-col gap-2",
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className="inline-flex items-center gap-2 cursor-pointer"
        >
          <RadioGroupItem
            value={option.value}
            disabled={disabled || option.disabled}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </UiRadioGroup>
  );
};

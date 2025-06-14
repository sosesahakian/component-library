import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "../ui/select";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

interface SmartSelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "default";
}

export function SmartSelect({
  options,
  value,
  onChange,
  placeholder,
  size = "default",
}: SmartSelectProps) {
  // Group options by their 'group' property or mark ungrouped
  const groups = options.reduce<Record<string, Option[]>>((acc, option) => {
    const key = option.group ?? "__ungrouped";
    if (!acc[key]) acc[key] = [];
    acc[key].push(option);
    return acc;
  }, {});

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger size={size}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {Object.entries(groups).map(([groupName, groupOptions]) =>
          groupName === "__ungrouped" ? (
            groupOptions.map(({ label, value, disabled }) => (
              <SelectItem key={value} value={value} disabled={disabled}>
                {label}
              </SelectItem>
            ))
          ) : (
            <SelectGroup key={groupName}>
              <SelectLabel>{groupName}</SelectLabel>
              {groupOptions.map(({ label, value, disabled }) => (
                <SelectItem key={value} value={value} disabled={disabled}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          )
        )}
      </SelectContent>
    </Select>
  );
}

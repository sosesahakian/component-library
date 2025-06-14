import React, { useState } from "react";
import { SmartSelect } from "../components/Select/SmartSelect";

export default {
  title: "Components/SmartSelect",
  tags: ["autodocs"],
  component: SmartSelect,
};

const options = [
  { label: "Apple", value: "apple", group: "Fruits" },
  { label: "Banana", value: "banana", group: "Fruits" },
  { label: "Carrot", value: "carrot", group: "Vegetables" },
  { label: "Broccoli", value: "broccoli", group: "Vegetables", disabled: true },
  { label: "Water", value: "water" },
];

export const Default = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div style={{ maxWidth: 300 }}>
      <SmartSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select an option"
      />
      <p>Selected: {value ?? "none"}</p>
    </div>
  );
};

export const SmallSize = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div style={{ maxWidth: 300 }}>
      <SmartSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose..."
        size="sm"
      />
      <p>Selected: {value ?? "none"}</p>
    </div>
  );
};

export const WithoutGroups = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const ungroupedOptions = options.map(({ label, value }) => ({
    label,
    value,
  }));

  return (
    <div style={{ maxWidth: 300 }}>
      <SmartSelect
        options={ungroupedOptions}
        value={value}
        onChange={setValue}
        placeholder="Select item"
      />
      <p>Selected: {value ?? "none"}</p>
    </div>
  );
};

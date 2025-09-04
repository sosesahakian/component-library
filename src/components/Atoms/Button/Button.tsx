export interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  primary?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

export const Button = ({
  label,
  onClick,
  size = "medium",
  primary = false,
  textColor = "text-white",
  backgroundColor = "bg-indigo-600",
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${backgroundColor} ${textColor} hover:bg-indigo-700 ${
      size === "small" ? "text-xs" : size === "large" ? "text-lg" : "text-base"
    } ${primary ? "font-bold" : ""}`}
  >
    {label}
  </button>
);

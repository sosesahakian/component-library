import { Switch as UISwitch } from "@/components/ui/switch";

export type SwitchProps = React.ComponentProps<typeof UISwitch>;

export const Switch = (props: SwitchProps) => {
  return <UISwitch {...props} />;
};

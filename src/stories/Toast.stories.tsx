import { toast, Toaster } from "@/components/Organisms/Toast/Toast";

export default {
  title: "Components/Organisms/Toast",
  component: Toaster,
};

export const Basic = () => (
  <div>
    <button
      onClick={() => toast("This is a toast message!", { closeable: true })}
      style={{ marginBottom: 16 }}
    >
      Show Toast
    </button>
    <Toaster />
  </div>
);

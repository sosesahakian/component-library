import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal/Modal";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export const Default = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal} className="btn">
        Open Modal
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          <p>This is a modal shown through the useModal hook.</p>
          <button onClick={closeModal} className="mt-4 btn">
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

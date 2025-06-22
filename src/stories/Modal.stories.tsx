import { Modal } from "../components/Modal/Modal";

import { useModal } from "../hooks/useModal";

export default {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
};

export const Default = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        open={isOpen}
        onOpenChange={closeModal}
        title="Modal Title"
        description="This is a description"
        showCloseButton
        footer={<button onClick={closeModal}>Close</button>}
      >
        <p>Modal content here</p>
      </Modal>
    </>
  );
};

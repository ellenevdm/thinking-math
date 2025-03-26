import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  return (
    <>
      <div onClick={onClose}></div>
      <dialog open={isOpen} className="w-1/2 h-1/2 bg-white">
        {children}
      </dialog>
    </>
  );
};

export default Modal;

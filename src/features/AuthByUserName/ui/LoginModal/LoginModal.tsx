import React from "react";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};

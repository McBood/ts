import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal";
import { t } from "i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onToggleModal}
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
        enim ea. Reprehenderit quia dolores quam, animi deserunt libero dolor
        corrupti voluptatibus, culpa sequi earum veniam, ab aliquam blanditiis.
        Magni?
      </Modal>
    </div>
  );
};

import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modal, isInputValid, items } = useGlobalContext();

  useEffect(() => {}, [items]);

  return (
    <div className="modal">
      <p
        className={`modal__text ${
          isInputValid ? "modal__text--valid" : "modal__text--invalid"
        }`}
      >
        {modal}
      </p>
    </div>
  );
};

export default Modal;

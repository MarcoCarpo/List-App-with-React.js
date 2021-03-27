import { useGlobalContext } from "../context";

const Modal = () => {
  const { modal } = useGlobalContext();
  return (
    <div className="modal">
      <p className="modal__text">{modal}</p>
    </div>
  );
};

export default Modal;

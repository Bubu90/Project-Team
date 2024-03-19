import styled from "styled-components";
import Buttons from "../Button/Buttons";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ModalStyled = styled.section`
  .result-modal[open] {
    animation: slide-in-from-top 0.35s ease-out;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.7rem;
    border: none;
    width: 30rem;
    height: 17rem;
    gap: 1rem;

    justify-content: center;
  }

  .result-modal::backdrop {
    background: rgba(0, 0, 0, 0.9);
  }

  & button {
    width: 5rem;
    margin-bottom: 0;
    margin-left: 80%;
  }
`;

const Modal = forwardRef(function Modal({ title, typeError, paragraph }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {
    console.log("CONSOLE");
  }
  return createPortal(
    <>
      <ModalStyled>
        <dialog className="result-modal" ref={dialog} onClose={handleClose}>
          <h2>{title}</h2>
          <p>{typeError}</p>
          <p>{paragraph}</p>
          <form method="dialog">
            <Buttons>Okay</Buttons>
          </form>
        </dialog>
      </ModalStyled>
    </>,
    document.getElementById("modal")
  );
});
export default Modal;

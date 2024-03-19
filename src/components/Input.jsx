import styled from "styled-components";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Modal from "./Style/Modal/Modal";

const InputProject = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--DarkGray);
  }
  & input {
    margin-bottom: 2rem;
    width: 40rem;
    height: 2rem;
    background-color: #eaeaea;
    border: none;
    border-bottom: 2px solid #b4b4b4;
    padding-left: 0.5rem;
  }
  & textarea {
    margin-bottom: 2rem;
    width: 40rem;
    height: 4rem;
    background-color: #eaeaea;
    border: none;
    border-bottom: 2px solid #b4b4b4;
    padding-left: 0.5rem;
  }
`;

const Input = forwardRef(function Input({ label, text, ...props }, ref) {
  const input = ref;

  return (
    <>
      <InputProject>
        <label>{label}</label>
        {text ? (
          <textarea ref={input} {...props} />
        ) : (
          <input ref={input} {...props} />
        )}
      </InputProject>
    </>
  );
});

export default Input;

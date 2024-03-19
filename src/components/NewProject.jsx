import styled from "styled-components";
import Input from "./Input.jsx";
import Button from "./Style/Button/Buttons.jsx";
import Modal from "./Style/Modal/Modal.jsx";
import { projects } from "../data.js";
import { useRef } from "react";

const Project = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .buttonContainer {
    width: 40rem;
    display: flex;
    justify-content: right;

    & Button {
      margin: 0;
      margin-left: 2rem;
    }
  }
`;

export default function NewProject(props) {
  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const enteredDueDate = useRef();

  function handleSubmit() {
    console.log(enteredTitle + enteredDescription + enteredDueDate);
    if (
      !enteredTitle.current.value ||
      !enteredDescription.current.value ||
      !enteredDueDate.current.value
    ) {
      dialog.current.open();
    } else {
      projects.push({
        id: Math.round(Math.random() * 100000),
        title: enteredTitle.current.value,
        description: enteredDescription.current.value,
        dueDate: enteredDueDate.current.value,
        tasks: [],
      });
      props.handleNewProject({ pageName: "main" });
    }
  }
  const dialog = useRef();

  return (
    <>
      <Modal
        ref={dialog}
        title={"Invalid input"}
        typeError={"Oops... looks like you forgot to enter a value."}
        paragraph={
          "Please make sure you provide a valid value for every input field."
        }
      />
      <Project>
        <div className="buttonContainer">
          <section>
            <Button
              bgColor="transparent"
              textColor="#353535"
              onClick={props.onClick}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </section>
        </div>
        <section>
          <Input ref={enteredTitle} label="title" />
          <Input ref={enteredDescription} label="Description" text />
          <Input ref={enteredDueDate} label="Due date" type="date" />
        </section>
      </Project>
    </>
  );
}

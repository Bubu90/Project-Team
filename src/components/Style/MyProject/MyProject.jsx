import styled from "styled-components";
import Button from "../Button/Buttons";
import Task from "../Task/Task";

const Project = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;

  & .title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  & .title-container h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding: 0;
  }

  & .title {
    display: flex;
    justify-content: space-between;
  }
  & .description {
  }
`;

export default function MyProject({
  project,
  onHandleNewProject,
  onClearProject,
}) {
  return (
    <Project>
      <div className="title-container">
        <div className="title">
          <h2>{project.title}</h2>
          <Button
            bgColor={"transparent"}
            textColor={"black"}
            onClick={() => onClearProject(project.id)}
          >
            Delete
          </Button>
        </div>
        <p>{project.dueDate}</p>
      </div>
      <div className="description">
        <p>{project.description}</p>
      </div>
      <Task onRender={onHandleNewProject} tasks={project.tasks} />
    </Project>
  );
}

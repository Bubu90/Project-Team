import styled from "styled-components";
import Input from "../../Input";
import Button from "../Button/Buttons";
import { useRef } from "react";

const TasksStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid gray;
  width: 50rem;
  margin-top: 2rem;

  & h3 {
    font-size: 1.5rem;
  }

  & Input {
    border: none;
  }
  & .inputTask {
    display: flex;
    align-items: last baseline;
    justify-content: center;
  }
  & .tasks-container {
    width: 50rem;
    background-color: #e6e5e4;
    margin-top: 3rem;
  }

  & .task {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
  }

  & .task p {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`;

export default function Task({ onRender, tasks }) {
  const taskValue = useRef();

  const addTasks = () => {
    tasks.push({
      id: Math.round(Math.random() * 100000),
      name: taskValue.current.value,
    });
    taskValue.current.value = "";
    onRender({});
  };

  function deleteTask(taskId) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        tasks.splice(i, 1);
        onRender({});
        break;
      }
    }
  }

  return (
    <TasksStyle>
      <div>
        <h3>Tasks</h3>
        <div className="inputTask">
          <Input ref={taskValue} />

          <Button bgColor="transparent" textColor="#353535" onClick={addTasks}>
            Add Task
          </Button>
        </div>
      </div>
      <div className={tasks.length > 0 && "tasks-container"}>
        {tasks.length > 0 ? (
          tasks
            .map((task) => (
              <div className="task" key={task.id}>
                <p>{task.name}</p>
                <Button
                  onClick={() => deleteTask(task.id)}
                  bgColor={"transparent"}
                  textColor={"black"}
                >
                  Clear
                </Button>
              </div>
            ))
            .reverse()
        ) : (
          <p>This project does not have any task yet.</p>
        )}
      </div>
    </TasksStyle>
  );
}

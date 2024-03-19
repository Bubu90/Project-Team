import styled from "styled-components";
import blocknotes from "./assets/blocknotes.png";
import { Main } from "./components/Style/Main/Main";
import Button from "./components/Style/Button/Buttons";
import Sidebar from "./components/Style/Sidebar/Sidebar";
import { useState, useRef } from "react";
import NewProject from "./components/NewProject";
import MyProject from "./components/Style/MyProject/MyProject";
import { projects } from "./data";
import "./App.css";

const MainPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% auto;
`;
function App() {
  const [isEditing, setIsEditing] = useState({
    pageName: "main",
    selectedProjectId: undefined,
  });
  console.log(isEditing);

  const handleNewProject = (page) => {
    setIsEditing((prevEditing) => {
      return { ...prevEditing, ...page };
    });
  };

  function handleClearProject(projectId) {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        projects.splice(i, 1);
        break;
      }
    }
    setIsEditing((prev) => {
      return {
        ...prev,
        pageName: "main",
        selectedProjectId: undefined,
        // myProject: prev.myProject.filter((project) => project.id !== prev.selectedProjectId)
      };
    });
  }

  return (
    <MainPage>
      <Sidebar onHandleNewProject={handleNewProject} selectedProjectId={isEditing.selectedProjectId} />
      {isEditing.pageName === "main" ? (
        <Main>
          <img src={blocknotes} alt="" />
          <h2>No Project Selected</h2>
          <p>Select a project or get started with a new one</p>
          <Button onClick={() => handleNewProject({ pageName: "newProject" })}>
            Create new project
          </Button>
        </Main>
      ) : isEditing.pageName === "newProject" ? (
        <NewProject
          handleNewProject={handleNewProject}
          onClick={() => handleNewProject({ pageName: "main" })}
        />
      ) : (
        <MyProject
          project={projects.find(
            (project) => project.id === isEditing.selectedProjectId
          )}
          onHandleNewProject={handleNewProject}
          onClearProject={handleClearProject}
        />
      )}
    </MainPage>
  );
}

export default App;

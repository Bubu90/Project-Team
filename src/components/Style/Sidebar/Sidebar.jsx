import { projects } from "../../../data.js";
import styled from "styled-components";
import SidebarProject from "./SidebarProject/SidebarProject.jsx";
import Button from "../Button/Buttons.jsx";
import Wrapper from "../Wrapper/Wrapper.jsx";

const SidebarContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 98vh;
  width: 100%;
  background-color: rgb(69, 65, 61);
  border-radius: 0 10px 0 0;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;

  & h2 {
    color: #fff;
  }

  & SidebarProject {
    margin: 0;
    padding: 0;
  }
`;

const Sidebar = ({ onHandleNewProject, selectedProjectId }) => {


  

  return (
    <Wrapper>
      <SidebarContainer>
        <h2>Your Project</h2>
        <Button
          textColor="#b7a89d"
          bgColor="#59514a"
          onClick={() => onHandleNewProject({ pageName: "newProject" })}
        >
          + Add Project
        </Button>
        {projects.map((project) => (
          <SidebarProject
            active={selectedProjectId===project.id}
            key={project.id}
            title={project.title}
            onSelectProject={() =>
              onHandleNewProject({
                pageName: "myProject",
                selectedProjectId: project.id,
              })
            }
          />
        ))}
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;

import styled from "styled-components";

const ButtonProject = styled.div`
  color: #fff;
  padding: 0.7rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover{
    background-color: #535049;
  }
`;

function SidebarProject({ onSelectProject, title, active}) {



  return (
    <>
      <ButtonProject style={active ? { backgroundColor: "#535049" } : {}} onClick={onSelectProject}>{title}</ButtonProject>
    </>
  );
}

export default SidebarProject;

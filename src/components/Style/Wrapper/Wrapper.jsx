import styled from "styled-components";

const WrapperStyled = styled.div`
  box-shadow: 3px black;
  position: relative;

`;

function Wrapper({ children }) {
  return <WrapperStyled className="card">{children}</WrapperStyled>;
}

export default Wrapper;

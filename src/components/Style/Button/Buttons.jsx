import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.textColor || "#fff"};
  background-color: ${(props) => props.bgColor || "#44413C"};
  border: none;
  outline: none;
  margin: 1.5rem 0;
`;

export default function Button({ onClick, children, bgColor, textColor }) {
  return (
    <ButtonStyle bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

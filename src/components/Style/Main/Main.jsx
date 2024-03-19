import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  & img {
    width: 5rem;
  }

  & h2 {
    margin-bottom: 1rem;
    color: var(--DarkGray);
  }

  & p {
    color: var(--LightGray);
  }
`;

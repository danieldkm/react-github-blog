import styled from "styled-components";

export const HomeContainer = styled.article`
  width: 100%;

  position: relative;
  top: -6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 3rem;
`;

export const CardsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 416px 416px;
  gap: 2rem;
`
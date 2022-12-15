import styled from "styled-components";

export const PostContainer = styled.article`
  width: 100%;

  position: relative;
  top: -6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 3rem;
`;


export const CardContainer = styled.section`
  width: 100%;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;

    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 19.2px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`

export const FlexSpacebetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FlexRow = styled.div`
  display: flex;
  gap: 2rem;
`
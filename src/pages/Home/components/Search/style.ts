import styled from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 0.75rem;

`

export const SearchTitleContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 28.8px;
  }

  p {
    color: ${props => props.theme["base-span"]};
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 22.4px;
  }
`

export const BaseInput = styled.input`
  height: 3.125rem;
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-border"]};
  border-radius: 6px;

  color: ${props => props.theme["base-text"]};

  padding: 0.75rem 1rem;

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme.blue};
  }

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }
`
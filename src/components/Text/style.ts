import styled from "styled-components";

export const Text = styled.p`
  color: ${props => props.theme['base-subtitle']};
  
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 25.6px;

  svg {
    color: ${props => props.theme["base-label"]};
  }
`
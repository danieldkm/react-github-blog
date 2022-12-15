import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${props => props.theme["base-post"]};
  width: 100%;

  padding: 2rem;
  border-radius: 10px;
  border: none;
  
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid transparent;

  cursor: pointer;

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
  }


  p {
    color: ${props => props.theme['base-span']};
    
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    /* text-overflow: ellipsis; */
    /* overflow: hidden; */
    /* word-wrap: break-word; */
    /* max-height: 6.7em; */

    --max-lines: 4;
    --line-height: 1.4;

    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }


`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  h1 {
    color: ${props => props.theme['base-title']};
    
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;

    width: 80%;
  }

  p {
    color: ${props => props.theme['base-span']};
    
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;

    width: 20%;
  }
`
import styled from 'styled-components'


export const ProfileContainer = styled.section`
  /* width: 54rem; */
  width: 100%;
  height: 13.25rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
  }
`

export const ProfileDescription = styled.div`
  width: 100%;
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;


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

export const ProfileDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  /* align-items: space-between; */
  justify-content: space-between;
  flex-direction: column;
`

export const ProfileDescriptionBottomContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`
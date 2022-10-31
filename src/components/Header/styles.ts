import styled from 'styled-components'


export const EffectContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  width: 100vw;
  min-height: 18.5rem;
  /* z-index: 999; */

  .effectLeft {
    position: absolute;
    left: 0;
    top: 70px;
    height: 11.75rem;
  }

  .effectRight {
    position: absolute;
    right: 0;
    top: 30px;
    height: 14.75rem;
  }
`


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  img {
    height: 6.125rem;
  }

`


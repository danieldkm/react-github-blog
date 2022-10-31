import logoGithublog from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'

import {
  EffectContainer,
  HeaderContainer,
} from './styles'

export function Header() {
  return (
    <EffectContainer>
      <img src={effectLeft} alt="" className='effectLeft' />
      <img src={effectRight} alt="" className='effectRight' />
      <HeaderContainer>
        <span>
          <img src={logoGithublog} alt="" />
        </span>
      </HeaderContainer>
    </EffectContainer>
  )
}


import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer, Main, Content } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </LayoutContainer>
  )
}


import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
// import { History } from './pages/History'

// import { Home } from './pages/Home'
// import { Cart } from './pages/Cart'
// import { Feedback } from './pages/Feedback'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/post/:number' element={<Post />} />
      </Route>
    </Routes>
  )
}

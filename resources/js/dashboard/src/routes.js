import React from 'react'

import Login from './pages/Login'
// const index = React.lazy(() => import('./index'))

export default [
  { path: '/', exact: true, name: 'Home', component: Login, closed: false }
]
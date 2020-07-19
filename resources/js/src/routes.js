import { lazy } from 'react'

const Dashboard = lazy(() => import('./views/pages/Dashboard/Dashboard'))

export default [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard }
]
import { lazy } from 'react'

const Dashboard = lazy(() => import('./views/pages/Dashboard/Dashboard'))
const School = lazy(() => import('./views/pages/School/School'))

export default [
  { path: '/', exact: true, name: 'Dashboard', permission :'general', component: Dashboard },
  { path: '/school', exact: true, name: 'School', permission :'admin', component: School }
]
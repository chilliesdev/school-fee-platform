import { lazy } from "react"

const Dashboard = lazy(() => import("./views/pages/Dashboard/Dashboard"))
const School = lazy(() => import("./views/pages/School/Index"))
const CreateSchool = lazy(() => import("./views/pages/School/Create"))
const EditSchool = lazy(() => import("./views/pages/School/Edit"))
const Transaction = lazy(() => import("./views/pages/Transaction/Transaction"))
const Profile = lazy(() => import("./views/pages/Profile/Profile"))

export default [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    permission: "school",
    component: Dashboard
  },
  {
    path: "/school",
    exact: true,
    name: "School",
    permission: "admin",
    component: School
  },
  {
    path: "/school/create",
    exact: false,
    name: "Create School",
    permission: "admin",
    component: CreateSchool
  },
  {
    path: "/school/:userId/edit",
    exact: false,
    name: "Edit School",
    permission: "admin",
    component: EditSchool
  },
  {
    path: "/transaction",
    exact: true,
    name: "Transaction",
    permission: "school",
    component: Transaction
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    permission: "school",
    component: Profile
  }
]

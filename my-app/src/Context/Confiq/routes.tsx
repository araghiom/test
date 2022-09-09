import { HomePage, OrdersPage, ChartPage } from "../../Pages/DefaultPage";
import Login from "../../Pages/Login";
import PrivateRoute from "../../component/PrivateRoute";
import RegisterForm from "../../Pages/RigisterForm";
import { Navigate } from "react-router-dom";
import Layout from "../../component/Layout";
import Table from "../../Pages/TablePage";
import Submit from "../../Pages/test";
import Form from "../../Pages/Login/Form";

export const routes = [
  { path: "/Login", element: <Login /> },
  { path: "/rigister", element: <RegisterForm /> },
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/*",
    element: <PrivateRoute />,
    children: [
      {
        path: "dashbord",
        element: <Layout />,
        children: [
          {
            path: "home",
            title: "home",
            element: <HomePage title="HomePage" />,
          },
          {
            path: "orders",
            title: "orders",
            element: <OrdersPage title="OrdersPage" />,
          },
          {
            path: "charts",
            title: "charts",
            element: <ChartPage title="ChartPage" />,
          },
          { path: "table", title: "table", element: <Table title="Table" /> },
          {
            path: "submit",
            title: "submit",
            element: <Submit  />,
          },
          { path: "form", title: "form", element: <Form  /> },
        ],
      },
    ],
  },
];

export const route: Array<any> = [
  {
    key: "router-Login",
    title: "Login",
    description: "Login",
    component: Login,
    path: "/login",
  },
  {
    key: "router-Register",
    title: "Register",
    description: "Register",
    component: RegisterForm,
    path: "/rigister",
  },
  {
    key: "router-Private",
    title: "private",
    description: "Private",
    component: PrivateRoute,
    path: "/*",
    subRoutes: [
      {
        key: "router-Dashboard",
        title: "Dashboard",
        description: "Dashboard",
        component: Layout,
        path: "/Layout",
        subRoutes: [
          {
            key: "router-HomePage",
            title: "HomePage",
            description: "HomePage",
            component: HomePage,
            path: "home",
          },
          {
            key: "router-OrdersPage",
            title: "OrdersPage",
            description: "OrdersPage",
            component: OrdersPage,
            path: "Orders",
          },
          {
            key: "router-ChartPage",
            title: "ChartPage",
            description: "ChartPage",
            component: ChartPage,
            path: "charts",
          },
          {
            key: "router-Table",
            title: "Table",
            description: "Table",
            component: Table,
            path: "table",
          },
          {
            key: "router-Submit",
            title: "Submit",
            description: "Submit",
            component: Submit,
            path: "Submit",
          },
        ],
      },
    ],
  },
];

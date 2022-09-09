import { Route } from "react-router-dom";
import{routes} from '../../Context/Confiq/routes'

import { Routes } from "react-router-dom";

const Routers = () => {

  const addRoute = (route: any) => (
    <Route key={route.key} path={route.path} element={route.component} />
  );
  

  return (
    <>

      <Routes>
        {routes.map((item: any) =>
          item.subRoutes
            ? item.subRoutes.subRoutes
              ? item.subRoutes.subRoutes.map((sub: any) => addRoute(sub))
              : item.subRoutes.map((sub: any) => addRoute(sub))
            : addRoute(item)
        )}
      </Routes>
    </>
    
  );
        }

export default Routers;

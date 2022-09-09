
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Routers = () => {
  let routers = useRoutes(routes);
 




  return <>{routers}</>;
};

export default Routers;

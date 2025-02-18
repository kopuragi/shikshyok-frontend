import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import OwnerOrderAllHistory from "../pages/Order/OwnerOrderPage/OwnerOrderAllHistory";
import OwnerOrderHistory from "../pages/Order/OwnerOrderPage/OwnerOrderHistory";
import Clock from "../pages/ClockTest";
import Counter from "../pages/CounterTest";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/order1", element: <OwnerOrderHistory /> },
    { path: "/order2", element: <OwnerOrderAllHistory /> },
    { path: "/clock", element: <Clock /> },
    { path: "/counter", element: <Counter /> },
  ]);

  return routes;
};

export default AppRoutes;

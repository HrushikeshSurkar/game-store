import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeaderVisible, setFooterVisible } from "../redux/layout/reducer";
import { routes } from "./routes";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { basicConfiguration } from "../constants/basicConfiguration";

function AppRouter() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (basicConfiguration.includes(location.pathname)) {
      dispatch(setHeaderVisible(false));
      dispatch(setFooterVisible(false));
    } else {
      dispatch(setHeaderVisible(true));
      dispatch(setFooterVisible(true));
    }
  }, [location, dispatch]);

  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default AppRouter;

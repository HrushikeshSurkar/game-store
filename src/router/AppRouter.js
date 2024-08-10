import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;

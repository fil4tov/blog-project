import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "app/providers/Router";

const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {Object.values(routerConfig).map(({element, path}) => (
          <Route key={path} element={element} path={path}/>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
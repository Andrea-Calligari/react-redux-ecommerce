import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from "./routes"

const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map((route, index) => {
          return <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.component />}


          />
        })
      }
    </Routes>
  )
}

export default AppRouter


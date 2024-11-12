import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HOME } from "./routes/paths";
import { privateRoutes } from "./routes/routes";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route key="/*" path="/*" element={<Navigate to={HOME} />} />
      </Routes>
    </>
  );
};

export default App;

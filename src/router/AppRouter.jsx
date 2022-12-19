import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeoresRoutes } from "../heroes";
import { DcPage, MarvelPage } from "../heroes/pages";
import { Navbar } from "../ui";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeoresRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<HeoresRoutes />} /> */}
      </Routes>
    </>
  );
};

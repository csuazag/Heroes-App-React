import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeoresRoutes } from "../heroes";
import { DcPage, MarvelPage } from "../heroes/pages";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeoresRoutes />} />
      </Routes>
    </>
  );
};

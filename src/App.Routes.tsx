import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ResetPage,
  LandingPage,
  RegisterPage,
  ActivatePage,
} from "./pages";
const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/reset" element={<ResetPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/activate/:email" element={<ActivatePage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
};

export default AppRouting;

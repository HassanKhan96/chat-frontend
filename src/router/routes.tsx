import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Landing from "../pages/landing";
import MainLayout from "../layouts/MainLayout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;

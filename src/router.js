import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import App from './App';
import DefaultLayout from "./Layouts/DefaultLayout";
import AdminLayout from "./Layouts/AdminLayout";
import LoginLayout from "./Layouts/LoginLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginAdmin from "./pages/LoginAdmin";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";

import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const router = createBrowserRouter([
  {
    path: "/", // Default layout cho các trang public
    element: <DefaultLayout />, // Sử dụng DefaultLayout
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "home",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login", // Layout cho trang đăng nhập admin
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginAdmin />,
      },
    ],
  },
  {
    path: "/admin", // Layout cho các trang admin
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: (
          <ProtectedRoute> // Bọc route cần kiểm tra bằng ProtectedRoute
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Admin Layout Footer - Admin Panel</p>
      </footer>
    </div>
  );
};

export default AdminLayout;

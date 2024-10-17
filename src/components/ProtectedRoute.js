import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Giả sử bạn dùng Redux

const ProtectedRoute = ({ children }) => {
  // Giả sử trạng thái đăng nhập được lưu trong Redux store dưới key `auth`
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  console.log(1111);
  // Kiểm tra nếu người dùng chưa đăng nhập hoặc không phải admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập và là admin, cho phép truy cập
  return children;
};

export default ProtectedRoute;

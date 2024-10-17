import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import router from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Sửa đổi phần render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// Báo cáo hiệu suất web
reportWebVitals();

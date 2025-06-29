import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './redux/Store'; // Make sure this path is correct
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast"; 
import { HashRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
  <Provider store={store}> {/* Make sure store is correctly imported */}
    <App />
    <Toaster/>
  </Provider>
  </HashRouter>
 
);

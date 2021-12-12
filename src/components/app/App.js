import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import initFirebaseApp from "../../configs/Firebase";
import Nav from "../navComponent/Nav";
import Home from "../homeComponent/Home";
import Features from "../featuresComponent/Features";
import Pricing from "../pricingComponent/Pricing";
import Login from "../loginComponent/Login";
import Register from "../registerComponent/Register";
import getUser from "../../auth/GetUser";

function App() {
  initFirebaseApp();

  getUser();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;

// import React from "react";
import Home from "../Components/Home/Home";
import Navber from "../Components/Navber/Navber";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet>
        <Home></Home>
      </Outlet>
    </div>
  );
};

export default Root;

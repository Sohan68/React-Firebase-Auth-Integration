// import React from "react";

import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Home = () => {
  const userInfo = use(AuthContext);
  console.log("user register to home", userInfo);
  return (
    <div>
      <h3>this is home page</h3>
    </div>
  );
};

export default Home;

import React from "react";
import Imagelight from "./Error404";

const Pagenotfound = (props) => {
  console.log(props);
  return props.error404 && <Imagelight />;
};

export default Pagenotfound;

import React from "react";
import error404 from "./Error404.gif";

const Error404 = () => {
  return (
    <div className="text-center error404">
      <img src={error404} alt="" className="error404-img" />
    </div>
  );
};

export default Error404;

import React from "react";
import {LoaderStyle} from "./style.js"
const Loader=(props)=>{
    return (
      <LoaderStyle {...props}>
        <p className="saving">
          {" "}
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </LoaderStyle>
    );
}
export default Loader
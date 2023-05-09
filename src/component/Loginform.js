import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";

function Loginform() {
  return (
    <>
        {/* <span className="input-group-text" id="basic-addon2" /> */}
        <div className="box">
          <button className="btn1">
            <FontAwesomeIcon icon={faUser} /> Admin
          </button>

          <button className="btn2">
            <FontAwesomeIcon icon={faUser} /> User
          </button>
        </div>
        <div className="box1">
          <button className="btn3">
            <Link to = "/registration"> Don't Have an Account? Sign Up </Link></button>
        </div>
    </>
  );
}

export default Loginform;

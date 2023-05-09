import React from "react";
import "./Newreg.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPassport, faLock} from '@fortawesome/free-solid-svg-icons';

function Newreg() {
  return (
    <>
      <div>
        
        <div className="box">
        <span className="input-group-text" id="basic-addon2"/>
        

          <input type="text" placeholder="Username" className="tb"/>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="First name" className="tb" />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="box1">
          <input type="text" placeholder="Last Name" className="tb1" />
          <FontAwesomeIcon icon={faUser} />
          <input type="number" placeholder="DeviceId" className="tb1"/>
          <FontAwesomeIcon icon={faPassport} />
        </div>
        <div className="box2">
          <input type="password" placeholder="Password" className="tb2"/>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Confirm password" className="tb2"/>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="box3">
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Newreg;

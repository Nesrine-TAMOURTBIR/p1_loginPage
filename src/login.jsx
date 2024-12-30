import React ,{ useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Import icons
import "./App.css";




const Login = () => {

const [action,setAction]=useState("Sign Up");

  return (
    
    <div className="login-container">
      <h1>{action}</h1>
      <div className="line"></div>

      <form className="login-form">
        {/* Name Field */}
        {action==="Login"?<div></div> :  <div className="form-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" placeholder="Name" />
        </div>}

       

        {/* Email Field */}
        <div className="form-group">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input type="email" placeholder="Email id" />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </form>

      {action ==="Sign Up"? <div></div> : <div className="forgotpass">lost password?
        <span>Clik here!</span>
      </div> }
      
      <div className="submit">
        <div className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit" } onClick={()=>{setAction("Login")}}>Login</div>
      </div>

      
    </div>
    
  );
};

export default Login;

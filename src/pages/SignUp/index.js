import React from 'react';

import './styles-signup.css';

import FormSignup from '../../components/SignUp/index.js';
import imgsignup from '../../assets/img_singup.png';
import imgperson2 from '../../assets/img_logon2.png';

export default function Logon() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        <FormSignup/>
      </div>
      <div className="col image">
        <img className="signupimg" src={imgsignup} alt=""/>
      </div>
    </div>

    <div className="row fixed-bottom">
        <img className="barinha" src={imgperson2} alt="" />
    </div>
  </div>
    
  );
}
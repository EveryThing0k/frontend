import React from "react";
import { FiMail } from "react-icons/fi";
import './style-signup.css';


//http://localhost:3000/signup

export default function FormSignup(){
  return (

<div className="Elements-SignUp">

<form className="formsignip">
    <h1 className="h1signup">REGISTRAR FUNCIONÁRIO</h1>
    <div className= "inputsignup">
        <FiMail size={20} cplor="#0000" />
        <input type="email" placeholder="EMAIL" required/>
    </div>
    <div>
        <button className="buttonregistrar" type="submit">REGISTRAR</button>
    </div>
</form>
</div>
  );
};

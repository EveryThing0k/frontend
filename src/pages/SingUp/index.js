import React from 'react';
import FormSingUp from '../../components/FormSingUp/index.js'
import singupimg from "../../assets/img_singup.png"
import footerimg from '../../assets/waves.png';

export default function SingUp() {
  return (
    <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <FormSingUp/>
            </div>
            <div className="col">
              <img className="img-fluid" src={singupimg} alt=""/>
            </div>
          </div>
        </div>
        <div className="row">
            <img className="fixed-bottom footerimg img-fluid" src={footerimg} alt=""/>
        </div>
    </div>
  );
}

import React from 'react';
import logonimg from '../../assets/img_logon.png';
import footerimg from '../../assets/waves.png';
import FormLogon from '../../components/FormLogon/index.js';

export default function Logon() {
  return (
    <div className="container">
      <div className="row align-items-center">
          <div className="col">
            <img className="img-fluid" src={logonimg} alt=""/>
          </div>
          <div className="col">
            <FormLogon/>
          </div>
      </div>
      <div className="row">
          <img className="fixed-bottom footerimg img-fluid" src={footerimg} alt="" />
      </div>
    </div>
  );
}

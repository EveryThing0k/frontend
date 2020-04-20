import React from 'react';

import './styles.css';
import imgperson from '../../assets/img_logon.png';
import imgperson2 from '../../assets/img_logon2.png';

import FormLogon from '../../components/FormLogon/index.js';

export default function Logon() {
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="col image">
            <img className="imagem1" src={imgperson} alt=""/>
          </div>

          <div className="col">
            <FormLogon/>
          </div>
      </div>

      <div className="row fixed-bottom">
          <img className="barinha" src={imgperson2} alt="" />
      </div>
    </div>
    
  );
}


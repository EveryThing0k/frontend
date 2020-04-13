import React from 'react';

import './styles.css';
import imgperson from '../../assets/img_logon.png';
import imgperson2 from '../../assets/img_logon2.png';

export default function Logon() {
  return (
    <div className="cointaner">
      <div className="row">
        
        <div className="col-md-8 imagem1">
          <img src={imgperson} alt=""/>
        </div>
        <div className="col-m4 formulario">
          <h1>BE ONE OF US!</h1>
          <form>
              <div className="">
                <input type="text"  placeholder="CNPJ"/>
              </div>
              <div>
                <input type="password"  placeholder="password"/>
              </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col imagem2">
          <img src={imgperson2} alt=""/>
        </div>
      </div>
      
    </div>
  );
}

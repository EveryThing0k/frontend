import React from 'react';

// import { Container } from './styles';
import FormSingUpCompany from '../../components/FormSingUpCompany/index.js'
import singupcompanyimg from "../../assets/img_singupcompany.png"
import footerimg from '../../assets/waves.png';

export default function SingUpCompany() {
  return (
    <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <FormSingUpCompany/>
            </div>
            <div className="col">
              <img className="img-fluid" src={singupcompanyimg} alt=""/>
            </div>
          </div>
          <div className="row">
              <img className="fixed-bottom footerimg img-fluid" src={footerimg} alt=""/>
          </div>
        </div>
    </div>
  );
}

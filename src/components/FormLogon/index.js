import React, {Component} from 'react';
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';

class FormLogon extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return (
        <div>
          <h1>EVERYTHING OK</h1>
            <form>
                <div className="row form-group">
                  <div className="col-md-1">
                    <FiMail size={20} cplor="#0000" />
                  </div>
                  <div className="col-md-11">
                    <input className="form-control" type="text" placeholder="EMAIL" />
                  </div>
                </div>
                <div className= "row form-group">
                  <div className="col-md-1">
                    <FiLock size={20} cplor="#0000" />
                  </div>
                  <div className="col-md-11">
                    <input className="form-control" type="password" placeholder="SENHA" />
                  </div>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary" type="submit">LOGIN</button>
                </div>
                <div className="text-center">
                    <span>Não possui uma conta?</span>
                    <Link className="back-link" to="/singin">
                        Criar Conta
                    </Link>
                </div>
            </form>
        </div>
    );
  }
}

export default FormLogon;

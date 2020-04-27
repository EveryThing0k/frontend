import React, { Component } from 'react';

class FormSingUp extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <div className="text-center">
                    <h1>SEJA UM DE NÓS!</h1>
                </div>
                <form>
                  <div className="form-group">
                      <input type="text" className="form-control mx-lg" placeholder="NOME"/>
                  </div>
                  <div className="form-group">
                      <input type="email" className="form-control" placeholder="EMAIL"/>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" placeholder="SENHA"/>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="CPF/CNPJ"/>
                  </div>
                  <div className="text-center">
                      <div className="form-group">
                          <button className="btn btn-primary" type="submit">REGISTRAR</button>
                      </div>
                  </div>
                </form>
            </div>
        );
    }
}

export default FormSingUp;

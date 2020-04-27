import React, { Component } from 'react';

class FormSingUpCompany extends Component {
  constructor(props){
      super(props)

  }
  
  render() {
    return (
      <div>
          <h1>REGISTRAR EMPRESA</h1>
          <form>
            <div className="row form-group">
              <div className="col">
                <input type="text" className="form-control" placeholder="NOME FANTASIA"/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-9">
                <input type="text" className="form-control" placeholder="RUA"/>
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="NÚMERO"/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col">
                <input type="text" className="form-control" placeholder="BAIRRO"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="CIDADE"/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col">
                <input type="text" className="form-control" placeholder="ESTADO"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="CEP"/>
              </div>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary" type="submit">REGISTRAR</button>
            </div>
          </form>
      </div>
    );
  }
}

export default FormSingUpCompany;

import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  render () {
    return(
      <div className="card bg-dark text-white rounded m-1 w-25">
        <h5 className="card-header border-bottom">
          TODO
        </h5>
        <div className="card-body">
          <p className="card-text m-1 border rounded">
            Texto Texto Texto Texto Texto TextoTexto
            TextoTextoTexto TextoTextoTexto Texto
          </p>
        </div>
        <div className="d-flex justify-content-end m-1">+10</div>
      </div>
    );
  }
}

export default Card;

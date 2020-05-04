import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card.js'

class Board extends React.Component {
  render () {
    return(
      <div className="col-md-9 ml-sm-auto col-lg-10 board">
        <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default Board;

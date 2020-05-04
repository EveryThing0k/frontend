import React from 'react'
import PropTypes from 'prop-types'
import Tree from '../Tree/Tree.js'

class Sidebar extends React.Component {
  render () {
    return(
      <div className="col-md-2 border-right sidebar">
        <h3>Projetos</h3>
        <Tree/>
      </div>
    );
  }
}

export default Sidebar;

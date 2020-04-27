import React, { Component } from 'react';
import ProjectList from '../../components/ProjectList/index.js'

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="col">
        <header>
          <h3>Projetos</h3>
          <ProjectList/>
          <ProjectList/>
          <ProjectList/>
          <ProjectList/>
        </header>
      </div>
    );
  }
}

export default SideBar;

import React from 'react';
import NavBar from '../../components/NavBar/index.js';
import SideBar from '../../components/SideBar/index.js'

import Board from '../../components/Board/index.js'


export default function Dashboard() {
  return(
    <div>
      <NavBar/>
      <div className="row">
        <div className="col-sm-2">
          <SideBar/>
        </div>
        <div className="col">
          <Board/>
        </div>
      </div>
    </div>
  );
}

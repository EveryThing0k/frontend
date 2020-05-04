import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Sidebar from '../../components/Sidebar/Sidebar.js'
import Board from '../../components/Board/Board.js'
import Icon from '@material-ui/core/Icon'
import AddIcon from '@material-ui/icons/Add';


export default function Dashboard() {
  return(
    <>
      <Navbar/>
      <Sidebar/>
      <Board/>
      <div className="d-flex fixed-bottom justify-content-end m-5">
        <button className="newCard" type="button"><AddIcon/></button>
      </div>
    </>
  );
}

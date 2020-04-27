import React, {Component}from 'react';
import ProfileStatus from '../../components/ProfileStatus/index.js'
import usrimg from '../../assets/usrimg.png';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div>
        <nav class="navbar navbar-dark">
          <Link class="navbar-brand" to="/dashboard">
            EVERYTHING OK
          </Link>
          <ProfileStatus/>
        </nav>
      </div>
    );
  }
}

export default NavBar;

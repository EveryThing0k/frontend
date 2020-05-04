import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile/Profile.js'

class Navbar extends React.Component {
  render () {
    return(
      <nav className="navbar text-white fixed-top">
        <span className="navbar-brand mb-0 h1">Everything Ok</span>
        <Profile/>
      </nav>
    );
  }
}

export default Navbar;

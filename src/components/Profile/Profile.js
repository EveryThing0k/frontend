import React from 'react'
import PropTypes from 'prop-types'
import UsrImg from '../../assets/usrimg.png'

class Profile extends React.Component {
  render () {
    return(
      <div className="row align-items-center">
        <div className="col">
          <div className="row">
            <p>Nome</p>
          </div>
          <div className="row">
            ----------
          </div>
        </div>
        <div className="col">
          <img src={UsrImg} alt="usrimg"/>
        </div>
      </div>
    );
  }
}

export default Profile;

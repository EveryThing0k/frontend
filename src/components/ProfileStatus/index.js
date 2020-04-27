import React, {Component}from 'react';
import usrimg from '../../assets/usrimg.png';
import { Link } from 'react-router-dom';

class ProfileStatus  extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col">
            <div className="row">
              <>
              </>
            </div>
            <div className="row">
            </div>
          </div>
          <div className="col">
            <Link to="/singin">
              <img src={usrimg} width="40" height="40" class="d-inline-block align-top" alt=""/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileStatus;

import React from "react";
import {      
  
  Button
} from "reactstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../../actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
 
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";


class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent",
    };
  }

  logoutt = () => {
    this.props.logout();
  };
  render() {
    let us = JSON.parse(localStorage.getItem('user'))     
    return (
      <>
        <div
          className="nav-unity"
          expand="lg"
        >        
          <div className="logout"> 
            <div className="logouttxt">                      
               <b>Usuario : </b>{ us.nombre } 
            </div>              
            <div className="logoutitems">                      
                <Button className="btn btn-danger btn-xs" onClick={() => {this.logoutt()}} >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>    
            </div>              
          </div>          
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...userActions,
    },
    dispatch
  ),
});
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar);

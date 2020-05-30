import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{

    render (){
        return (
            <div className="header">
                <h3>{ this.props.title }</h3>
                <a href="#" onClick={this.props.toggleForm}>
                    <FontAwesomeIcon icon={faEdit} />
                </a>    
            </div>
        )
    }
}

export default Header;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = (props) => {

    const tasks = useSelector(state => state);
    console.log(tasks);
    
    return (
            <div className="header">
                <h3>{ props.title }</h3>
                <a href="#" onClick={props.toggleForm}>
                    <FontAwesomeIcon icon={faEdit} />
                </a>    
            </div>
        )
    
}

export default Header;
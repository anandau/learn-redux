import React from "react";
import './modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Modal extends React.Component{
    

    render (){

        if(!this.props.isOpen){
            return null;
        }

        return (
            <div className="modal-overlay">
                <div className={ `modal ${this.props.classes}` }>
                    <a className="modal-close" onClick={this.props.onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;
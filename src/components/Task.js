import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "./modal";
import EditTask from "./EditTask";

class Task extends React.Component{

    state = {
        showModal: false
    }
    
    toggleStatus = (event) => {
        this.props.toggleStatus( this.props.index );
    }

    deleteTask = (event) => {
        event.preventDefault();
        this.props.deleteTask(this.props.index);
    }

    openModal = event => {
        event.preventDefault();
        this.setState({showModal:  true});
    }

    hideModal = () => {
        this.setState({showModal:  false});
    }

    

    

    render(){
        const { name, completed } = this.props.task;
        return (
            <li className={ completed?'completed':'' }>
                <div className="actions">
                    <a className="task-delete" onClick={this.deleteTask}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </a>
                    <a className="task-edit" onClick={ this.openModal } >
                        <FontAwesomeIcon icon={faEdit} />
                    </a>
                </div>
                
                <span>{name}</span>
                <input type="checkbox" className="taskstatus" onChange={ this.toggleStatus } />
                <Modal 
                    isOpen={this.state.showModal}
                    onClose={this.hideModal}
                    classes="edit-task-modal"
                >
                    <EditTask 
                        key={this.props.index} 
                        index={this.props.index} 
                        task={this.props.task} 
                        updateTask={this.props.updateTask} 
                        hideModal={this.hideModal}
                    />
                </Modal>    
               
          </li>  
        );
    }
}

export default Task;
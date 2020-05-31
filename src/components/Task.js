import React from "react";
import { useDispatch } from 'react-redux';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { toggleStatus } from './TaskActions';


import Modal from "./modal";
import EditTask from "./EditTask";




const Task = (props) => {

    const { name, completed } = props.task;
    const dispatch = useDispatch();
        console.log('Completed', completed);
        return (
            <li className={ completed ?'completed':'' }>
                <div className="actions">
                    <a className="task-delete">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </a>
                    <a className="task-edit" >
                        <FontAwesomeIcon icon={faEdit} />
                    </a>
                </div>
                
                <span>{name}</span>
                <input type="checkbox" className="taskstatus" onChange={ () => dispatch( toggleStatus(props.index) )} />
                {/* <Modal 
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
                </Modal>     */}
               
          </li>  
        );
}

export default Task;
import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import Task from './Task';

class TaskList extends React.Component{

    render(props){

        return (
            <TransitionGroup component="ul" className="tasklist">
                { Object.keys(this.props.tasks).map(key => {
                    return(
                        
                            <CSSTransition 
                                classNames="task" 
                                key={key}
                                timeout={ { enter:500, exit:500 } } >
                                <Task 
                                    key={key}
                                    index={key}
                                    task={this.props.tasks[key]} 
                                    toggleStatus={this.props.toggleStatus}
                                    deleteTask={this.props.deleteTask}   
                                    updateTask={this.props.updateTask} 
                                />
                            </CSSTransition>
                            
                    );
                })}
            </TransitionGroup>
        );
    }

}

export default TaskList;
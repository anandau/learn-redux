import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import { useSelector } from 'react-redux';
import Task from './Task';



const TaskList = (props) => {

    const tasks = useSelector( state => state.tasks);

    return (
        <TransitionGroup component="ul" className="tasklist">
            { Object.keys(tasks).map(key => {
                return(
                    
                        <CSSTransition 
                            classNames="task" 
                            key={key}
                            timeout={ { enter:500, exit:500 } } >
                            <Task 
                                key={key}
                                index={key}
                                task={tasks[key]} 
                            />
                        </CSSTransition>
                        
                );
            })}
        </TransitionGroup>
    );
}

export default TaskList;
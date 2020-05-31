import React from "react";
import { useSelector, useDispatch } from "react-redux";



const AddTask = (props) => {
            const tasks = useSelector( state => state.tasks);
            const dispatch = useDispatch();
            
            if(props.showForm){
            return (
                <form name="task-form" onSubmit={ () => dispatch({ type: 'ADD_TASK', task: 1}) }>
                    <input type="text"  name="task" className="task-field" placeholder="Type here and hit enter" />
                </form>    
            )
        }

        return null;
    
}

export default AddTask;
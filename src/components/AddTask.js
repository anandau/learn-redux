import React from "react";


class AddTask extends React.Component{
    
    taskRef = React.createRef();

    addTask = event => {
        event.preventDefault();
        const task = {
            name: this.taskRef.current.value,
            completed: false,
            desc: ''
        }

        this.props.addTask(task);

        event.currentTarget.reset();
    }

    render(){

        if(this.props.showForm){
            return (
                <form name="task-form" onSubmit={this.addTask}>
                    <input type="text"  name="task" className="task-field" ref={this.taskRef} placeholder="Type here and hit enter" />
                </form>    
            )
        }

        return null;
        
    }
}

export default AddTask;
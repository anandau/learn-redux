import React from "react";

class EditTask extends React.Component{

    nameRef = React.createRef();
    descRef = React.createRef();

    submitHandler = (event) => {
        
        event.preventDefault();

        const updatedTask = {
            ...this.props.task,
            name: this.nameRef.current.value,
            desc: this.descRef.current.value
        }
        
        this.props.updateTask(updatedTask, this.props.index);
        this.props.hideModal();
    }

    render(){
        const { name, desc } = { ...this.props.task}
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-row">
                    <label>Title</label>
                    <input type="text" ref={this.nameRef} name="name" defaultValue={ name }  />
                </div>

                <div className="form-row">
                    <label>Description</label>
                    <textarea name="desc" ref={this.descRef} defaultValue={desc}></textarea>
                </div>

                <input className="submit" type="submit" value="Update Task" />
                
            </form>    
        );
    }
}

export default EditTask;
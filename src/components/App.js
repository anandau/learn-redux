import React from 'react';
import Header from './header';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends React.Component {

  state = {
    tasks : [],
    showForm : false
  }

  componentDidMount(){

    // load tasks from local storage
    const tasks = localStorage.getItem('tasks');
    if(tasks !== null){
      this.setState({
        tasks: JSON.parse(tasks)
      });
    }
    
  }

  componentDidUpdate(){

    // update tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  deleteTask = index => {

    const tasks = { ...this.state.tasks };
    
    delete tasks[index];

    this.setState({ tasks });
  }

  updateTask = (task, index) => {
    const tasks = { ...this.state.tasks }

    tasks[index] = task;

    this.setState({ tasks });
  }


  addTask = task => {
    const tasks = {...this.state.tasks};
    const uniqueId = `task_${Date.now()}`;
    
    tasks[uniqueId] = task;
    this.setState({ tasks });
  }

  toggleStatus = (key)  => {

    const tasks = {...this.state.tasks};
  
    tasks[key].completed = ! tasks[key].completed;

    this.setState({ tasks });
  }

  toggleForm = (e) => {
      e.preventDefault();
      const showForm = this.state.showForm;
      
      this.setState({ 'showForm' : !showForm });
  }

  render(){
    return (
      <div className="todocontainer">
  
          <Header title="To-Do List" toggleForm={this.toggleForm} />
          
          <AddTask addTask={this.addTask} showForm={this.state.showForm} />
          <TaskList  
            tasks={this.state.tasks} 
            toggleStatus={this.toggleStatus} 
            deleteTask={this.deleteTask}  
            updateTask={this.updateTask}
          />
      </div>
    );
  }
  
}

export default App;

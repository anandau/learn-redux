
const initialState = {
    tasks : [
        {
            name : 'Task 1',
            completed: false,
        },

        {
            name : 'Task 1',
            completed: false,
        },

        {
            name : 'Task 1',
            completed: false,
        }
    ],
    showForm : false
  }

const TaskReducer = ( state = initialState , action) => {

    const tasks = { ...state.tasks };
    switch(action.type){

        case 'ADD_TASK' : return ''

        case 'UPDATE_TASK':  return ''

        case 'TOGGLE_STATUS':  tasks[action.index].completed = ! tasks[action.index].completed;
                               state.tasks = tasks;


        default : return state;
    }
}

export default TaskReducer;
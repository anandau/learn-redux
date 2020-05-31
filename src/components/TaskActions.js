export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
}

export const updateTask = (task) => {
    return {
        type: 'UPDATE_TASK',
        task
    }
}

export const toggleStatus = (index) => {
    return {
        type: 'TOGGLE_STATUS',
        index
    }
}

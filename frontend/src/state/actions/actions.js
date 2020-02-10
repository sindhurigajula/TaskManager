export const initView = () => ({
    type: "INIT_VIEW"
});

export const completeTask = (taskId) => ({
    type: "COMPLETE_TASK",
    taskId
});

export const addTask = (taskDesc) => ({
    type: "ADD_TASK",
    taskDesc
});
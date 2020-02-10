import { all, call, put, select, takeLatest } from "redux-saga/effects";
import * as FetchHandler from '../api/FetchHandler';

export default function* tasksSaga() {
    yield all ([
        takeLatest("INIT_VIEW", initTasks),
        takeLatest("COMPLETE_TASK", completeTask),
        takeLatest("ADD_TASK", addTask),
    ]);
}

export function* initTasks() {
    try{
        const appState = yield select();
        const tasksServerResponse = yield call(getTasks);
        let tasks = {};
        tasksServerResponse.forEach(element => {
            tasks[element.task.taskid] = element;
        });
        yield put(setTasks(tasks));
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* completeTask(action) {
    const {taskId} = action;
    try {
        const compTaskServerResponse = yield call(compTask, taskId);
        const getTasksServerResponse = yield call(getTasks);
        let tasks = {};
        getTasksServerResponse.forEach(element => {
            tasks[element.task.taskid] = element;
        });
        yield put(setTasks(tasks));
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* addTask(action) {
    const {taskDesc} = action;
    try {
        const addTaskServerResponse = yield call(callAddTask, taskDesc);
        const getTasksServerResponse = yield call(getTasks);
        let tasks = {};
        getTasksServerResponse.forEach(element => {
            tasks[element.task.taskid] = element;
        });
        yield put(setTasks(tasks));
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const compTask = (taskId) => {
    return FetchHandler.post("/updateTask", 
    {
        username: "sindhu",
        taskid: taskId
    });
}

const callAddTask = (taskDesc) => {
    return FetchHandler.post("/addtask", 
    {
        username: "sindhu", 
        taskdescription: taskDesc,
        isDone: false
    });
}

const getTasks = () => {
    return FetchHandler.get("/get/sindhu");
}

function setTasks(tasksServerResponse) {
    return {
        type: "SET_TASKS",
        tasks: tasksServerResponse
    };
}
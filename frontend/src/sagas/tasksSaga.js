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
        console.log(appState);
        const tasksServerResponse = yield call(getTasks);
        yield put(setTasks(tasksServerResponse));
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* completeTask(action) {
    const {taskId} = action;
    try {
        const compTaskServerResponse = yield call(compTask, taskId);
        console.log(FetchHandler.resp);
        delete FetchHandler.resp[compTaskServerResponse.taskId];
        console.log(FetchHandler.resp);
        const getTasksServerResponse = yield call(getTasks);
        yield put(setTasks(getTasksServerResponse));
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* addTask(action) {
    const {taskDesc} = action;
    try {
        const addTaskServerResponse = yield call(callAddTask, taskDesc);
        console.log(FetchHandler.resp);
        FetchHandler.resp[addTaskServerResponse.taskId] = {taskDesc};
        console.log(FetchHandler.resp);
        const getTasksServerResponse = yield call(getTasks);
        console.log(getTasksServerResponse);
        yield put(setTasks(getTasksServerResponse));
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const compTask = (taskId) => {
    return FetchHandler.post("http://localhost:4011/completeTask", {taskId});
}

const callAddTask = (taskDesc) => {
    return FetchHandler.post("http://localhost:4011/addTask", {taskDesc});
}

const getTasks = () => {
    return FetchHandler.get("http://localhost:4011/get/sindhu");
}

function setTasks(tasksServerResponse) {
    return {
        type: "SET_TASKS",
        tasks: tasksServerResponse
    };
}
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as FetchHandler from '../api/FetchHandler';

export default function* tasksSaga() {
    yield all ([
        takeLatest("INIT_VIEW", updateTasks),
    ]);
}

export function* updateTasks() {
    try{
        const tasksServerResponse = yield call(getTasks);
        yield put(setTasks(tasksServerResponse));
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const getTasks = () => {
    return FetchHandler.get("https://localhost:4011/getTasks/sindhuri");
}

function setTasks(tasksServerResponse) {
    return {
        type: "SET_TASKS",
        tasks: tasksServerResponse
    };
}
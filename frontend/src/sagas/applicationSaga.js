import { all } from "redux-saga/effects";
import tasksSaga from "./tasksSaga";

function* watchAllSagas() {
    yield all ([
        tasksSaga()
    ]);
}

export default watchAllSagas;
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import * as FetchHandler from '../api/FetchHandler';

export default function* loginSaga() {
    yield all ([
        takeLatest("VALIDATE_LOGIN", validateLogin)
    ]);
}

export function* validateLogin(action) {
    const {logindetails} = action;
    try {
        const addLoginServerResponse = yield call(callvalidateLogin, logindetails);
        console.log(FetchHandler.resp);
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const callvalidateLogin = (logindetails) => {
    return FetchHandler.post("http://localhost:4011/login", {logindetails});
}

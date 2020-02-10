import { all, call, put, takeLatest } from "redux-saga/effects";
import * as FetchHandler from '../api/FetchHandler';

export default function* loginSaga() {
    yield all ([
        takeLatest("VALIDATE_LOGIN", validateLogin),
    ]);
}

export function* validateLogin(action) {
    const {userinfo} = action;
    
    try {
        const addLoginServerResponse = yield call(callvalidateLogin, userinfo);
        yield put(setUserinfo(userinfo));
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const callvalidateLogin = (userinfo) => {
    return FetchHandler.post("/login", userinfo);
}

function setUserinfo(userinfo) {
    return {
        type: "SET_USER",
        userinfo
    };
}

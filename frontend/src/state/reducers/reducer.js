import { combineReducers } from "redux";

export default combineReducers({
    userInfo: (state={}, action) => {return state},
    tasks: (state=[], action) => {
        switch(action.type) {
            case "SET_TASKS":
                return action.tasks;
            case "INIT_VIEW":
                return state;
            default:
                return state;
        }
    }
});
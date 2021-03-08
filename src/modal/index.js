// import { combineReducers } from 'redux' (方式一)
import chatLog from './chatLog';
import statusMessage from './statusMessage';
import userName from './userName';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        const newState = {};

        for (let key in reducers) {
        const reducer = reducers[key];

        newState[key] = reducer(state[key], action);
        }

        return newState;
    };
}
export default combineReducers({ chatLog, statusMessage, userName })

// const chatReducer = (state = {}, action = {}) => {
//     return {
//       chatLog: chatLog(state.chatLog, action),
//       statusMessage: statusMessage(state.statusMessage, action),
//       userName: userName(state.userName, action)
//     }
// }; （方式二）
// export default chatReducer;（方式二）
// export default combineReducers({ chatLog, statusMessage, userName })（方式一）
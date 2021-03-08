const initState = {
    log: 'hello redux'
};
const chatLog = (state = initState, action = {}) => {
    switch(action.type) {
        case 'chatLog/log':
        return {
            ...state,
            ...action.payload,
        };
        default:
        return state;
    }
}
export default chatLog;
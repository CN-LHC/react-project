const initState = {
    message: '这是一条信息'
};
const statusMessage = (state = initState, action = {}) => {
    switch(action.type) {
        case 'statusMessage/message':
        return {
            ...state,
            ...action.payload,
        };
        default:
        return state;
    }
}
export default statusMessage;
const initState = {
    name: '我是刘汉川'
};
const userName = (state = initState, action = {}) => {
    switch(action.type) {
        case 'userName/name':
        return {
            ...state,
            ...action.payload,
        };
        default:
        return state;
    }
}
export default userName;
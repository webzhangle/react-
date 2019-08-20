const INITIAL_STATE = {
    name: 'zhagle123'
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'aaa':
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
            newState.name = '123'
            console.log(newState)
            return {
                name: '888'
            };
        default: return state;
    }
};
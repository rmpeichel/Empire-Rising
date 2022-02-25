let initialState = {
    users: {}
};

export default function rootReducer(state = initialState, action) {
    let newState = {...state};
    
    switch(action.type) {
        case "login":
            newState.user = {...action.user}
            break;
        case "register":
            
            break;
        default:
            if(String(action.type).includes("@@redux/INIT")) {
                let localUser = JSON.parse(localStorage.getItem('user'));
                if(localStorage.getItem('user') != null) {
                    localUser = JSON.parse(localStorage.getItem('user'));
                    newState.user = localUser;
                }
            }
            break;
    }

    return newState;
}
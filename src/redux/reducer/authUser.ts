const initState = {
    isAuth: false
}

export default (state = initState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuth: Object.keys(action.payload.user).length > 0 ? true : false }
        case 'SIGN_OUT':
            return {isAuth: false}
        default:
            return state
    }
}
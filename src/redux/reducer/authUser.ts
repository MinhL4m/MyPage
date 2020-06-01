const initState = {
    isAuth: false
}

export default (state = initState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuth: true  }
        case 'SIGN_OUT':
            return {isAuth: false}
        default:
            return state
    }
}
const userId = ''

export default function reducer(state = userId, action) {
    switch (action.type) {
        case 'SIGN_IN':
            state = action.payload
            return state
        default:
            return state
    }
}
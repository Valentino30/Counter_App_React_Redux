const initialState = {
    age: 25
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ageDownAsync':
            return {
                age: state.age - action.payload
            }
        case 'ageUpAsync':
            return {
                age: state.age + action.payload
            }
        default:
            return state;
    }
}
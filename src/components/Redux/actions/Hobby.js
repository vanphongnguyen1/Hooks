export const AddNewHobby = hobby => {
    return {
        type: 'ADD_HOOBY',
        payload: hobby
    }
}

export const SetActiveHobby = hobby => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby
    }
}
const init = {
  list: [],
  activeId: null
}

const HobbyReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_HOOBY': {
      const [...newState] = state.list
      newState.push(action.payload)
      return {
        ...state,
        list: newState
      }
    }

    case 'SET_ACTIVE_HOBBY': {
      return {
        ...state,
        activeId: action.payload
      }
    }

    default :
      return state
  }
}

export default HobbyReducer
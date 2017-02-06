export function managePresents(state, action){
  if (action.type === 'INCREASE') {
    return Object.assign({}, state.numberOfPresents, {numberOfPresents: state.numberOfPresents + 1 })
  } else {
    return state
  }
}

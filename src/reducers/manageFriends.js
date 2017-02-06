export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return Object.assign({}, state, state.friends.push(action.payload))
  } else if (action.type === 'REMOVE_FRIEND') {

    let friendPayload = action.payload

    let newArr = state.friends.filter( (friend) => {
      return friendPayload !== friend.id
    })

    return Object.assign({}, state, {friends: newArr})

  } else {
    return state
  }
}

// function isBigEnough(value) {
//   return value >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

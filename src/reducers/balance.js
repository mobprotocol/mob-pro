export default function balance(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_BALANCE':
      return {
        ...state,
        [action.asset]: action.data
      }
      break
    default:
      return state
      break
  }
}

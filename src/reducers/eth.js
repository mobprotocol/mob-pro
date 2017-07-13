const INITIAL_STATE = {
  metamask: true
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'METAMASK_STATUS':
      return {
        ...state,
        metamask: action.status
      }
      break
    default:
      return state
      break
  }
}

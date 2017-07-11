const INITIAL_STATE = {
  tokenA: 'MOB',
  tokenB: 'BAT'
  type: 'A'
}

export default function token(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CHANGE_TOKEN_A':
      return {
        ...state,
        tokenA: action.data
      }
    case 'CHANGE_TOKEN_B':
      return {
        ...state,
        tokenB: action.data
      }
    case 'CHANGE_TOKEN_TYPE':
      return {
        ...state,
        type: action.data
      }
    default:
      return state
  }
}

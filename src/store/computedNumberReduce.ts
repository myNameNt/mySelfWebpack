import {ADD,MINUS} from './types'
import {computedAction} from './actions'

export interface computedState {
  result: number;
  isShow: boolean
}
let initialState:computedState = {
  result: 0,
  isShow: true
}
export function computedNumber(state = initialState, action: computedAction) {
  let result = state.result
  switch(action.type){
    case ADD:
      result = result + action.number
      return Object.assign({}, state, {
        result
      })
    case MINUS:
      result = result - action.number
      return Object.assign({}, state, {
        result
      })
    default: 
      return state
  }
}
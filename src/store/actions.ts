import {ADD,MINUS} from './types'

export interface computedAction {
  type: string;
  number: number;
}
export function addAction (num: Number) {
  return {
    type: ADD,
    number: num
  }
}
export function minusAction (num: Number) {
  return {
    type: MINUS,
    number: num
  }
}
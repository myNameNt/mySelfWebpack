export const ADD = 'ADD'
import { computedState } from './computedNumberReduce'
export const MINUS = 'MINUS'

export interface GlobelState {
  computedNumber: {
    result: number,
    isShow: boolean
  }
}

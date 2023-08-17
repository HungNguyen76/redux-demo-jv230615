import { INCREASE, DECREASE } from './constants'

export const increase = (payload) => ({
    type: INCREASE,
    payload
})

export const decrease = (payload) => ({
   type: DECREASE,
   payload
})
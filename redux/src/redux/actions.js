import {INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER} from "./actionTypes";
export const artır = () => {
    return{
        type: INCREASE_COUNTER,

    }
}
export const eksilt = () => {
    return{
        type: DECREASE_COUNTER,

    }
}
export const resetles = () => {
    return{
        type: RESET_COUNTER,

    }
}
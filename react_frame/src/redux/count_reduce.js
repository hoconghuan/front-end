import { increment, decrement } from "./constant";

let initState = 0
export default function countReducer(previousState = initState, action) {
    let { type, data } = action
    switch (type) {
        case increment:
            return previousState + data

        case decrement:
            return previousState - data
        default:
            return previousState
    }

}
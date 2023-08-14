import { increment, decrement } from "./constant";

// 同步
export let incrementActon = (data) => { return ({ type: increment, data }) }
export let decrementActon = (data) => { return ({ type: decrement, data }) }

// 异步
export let incrementAsyncActon = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementActon(data))
        }, timer);
    }

}


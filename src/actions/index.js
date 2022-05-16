export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = operation =>{
    return({type:CHANGE_OPERATION, payload: operation})
}

export const clearDisplay = () =>{
    return({type: CLEAR_DISPLAY})
}

export const changeMemory = (num) =>{
    return({type: CHANGE_MEMORY, payload:num})
}

export const clearMemory = (num) =>{
    return({type: CLEAR_MEMORY})
}
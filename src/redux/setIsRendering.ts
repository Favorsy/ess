export default (bool: boolean) => {
    return {
        type: "SET_IS_RENDERING",
        payload: bool
    }  
}
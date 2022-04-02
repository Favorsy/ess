const INITIAL_STATE = {
    isRendering: true,
}


const reducer = (state = INITIAL_STATE,


{ type, payload }: {type: string, payload: any}) => {


  switch (type) {

    case "SET_IS_RENDERING":
        return { ...state, isRendering: payload }

    default:
        return state

  }


}

export default reducer;
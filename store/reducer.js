const initialState = {
  test: "zdarova"
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
}

export default reducer;
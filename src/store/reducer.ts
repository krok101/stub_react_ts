import { SET_COUNT } from "./actions"
import { iAction, iState } from "./models"

const initialState: iState = {
  count: 0,
}

const rootReducer = (state = initialState, { type, payload }:iAction) => {
  switch (type) {
    case SET_COUNT: return { ...state, count: payload }
  }
  return state
}

export default rootReducer

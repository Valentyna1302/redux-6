import { changeStep, decrement, increment, reset } from "./actions";

const initialState = {
  counter: 0,
  step: 1,
};

// BLL
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type: {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
    case decrement.type: {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }

    case reset.type: {
      return initialState;
    }

    case changeStep.type: {
      return {
        ...state,
        step: action.payload,
      };
    }

    default:
      return state;
  }
};

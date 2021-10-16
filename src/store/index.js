import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
  // switch (action.type) {
  //   case 'counter/incremented':
  //     return { counter: state.counter + 1 }
  //   case 'counter/decrement':
  //     return { counter: state.counter - 1 }
  //   default:
  //     return state
  // }
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state
}

const store = createStore(counterReducer)

export default store

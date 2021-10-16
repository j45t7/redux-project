import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    default:
      return state
  }
  // if (action.type === 'increment') {
  //   return {
  //     counter: state.counter + 1,
  //   }
  // }
  // if (action.type === 'decrement') {
  //   return {
  //     counter: state.counter - 1,
  //   }
  // }

  // return state
}

const store = createStore(counterReducer)

export default store

import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementByFive(state, action) {
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { counter: state.counter + 1, showCounter: state.showCounter }
//     case 'incrementByFive':
//       return {
//         counter: state.counter + action.value,
//         showCounter: state.showCounter,
//       }
//     case 'decrement':
//       return { counter: state.counter - 1, showCounter: state.showCounter }
//     case 'toggle':
//       return { counter: state.counter, showCounter: !state.showCounter }
//     default:
//       return state
//   }
//   // if (action.type === 'increment') {
//   //   return {
//   //     counter: state.counter + 1,
//   //   }
//   // }
//   // if (action.type === 'decrement') {
//   //   return {
//   //     counter: state.counter - 1,
//   //   }
//   // }

//   // return state
// }

const store = configureStore({ reducer: counterSlice.reducer })

export const counterActions = counterSlice.actions
export default store

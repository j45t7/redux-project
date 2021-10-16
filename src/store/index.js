import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter-slice'
import authReducer from './auth-slice'

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

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
})

export default store

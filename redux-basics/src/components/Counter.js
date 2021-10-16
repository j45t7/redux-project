import { useSelector, useDispatch, connect } from 'react-redux'
import { Component } from 'react'

import { counterActions } from '../store/counter-slice'
import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)
  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' })
  // }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const incrementByFiveHandler = () => {
    dispatch(counterActions.incrementByFive(5)) // { type: UNIQUE_IDENTIFIER, palyload: 5 }
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={counter} onClick={incrementHandler}>
          Increment
        </button>
        <button className={counter} onClick={incrementByFiveHandler}>
          Increment By 5
        </button>
        <button className={counter} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button
//             className={classes.counter}
//             onClick={this.incrementHandler.bind(this)}
//           >
//             Increment
//           </button>
//           <button
//             className={classes.counter}
//             onClick={this.decrementHandler.bind(this)}
//           >
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter

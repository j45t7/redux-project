import { useSelector, useDispatch } from 'react-redux'

import { toggle } from '../../store/ui-slice'
import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

export default CartButton

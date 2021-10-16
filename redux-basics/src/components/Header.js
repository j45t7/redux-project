import { useSelector, useDispatch } from 'react-redux'

import { authActions } from '../store/auth-slice'
import classes from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  const nav = (
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && nav}
    </header>
  )
}

export default Header

import {Fragment} from 'react'

import mealsImage from '../assets/meals1.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCart';

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='img' />
        </div>
    </Fragment>
  )
}

export default Header

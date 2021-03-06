import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImg from "../../assets/header-fast-food.jpg";
import classes from "./Header.module.css";

const Header = props => {
  return (
  <Fragment>
    <header className={classes.header}>
      <h1>Meal Basket</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImg} alt="fast food" />
    </div>
  </Fragment>)
};

export default Header;
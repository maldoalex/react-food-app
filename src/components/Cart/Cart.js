import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = <ul className={classes['cart-items']}>{[{
    id: "c1",
    name: "McDonalds",
    amount: 2,
    price: 8,
  }]
  .map(item => <li>{item.name}</li>)
  }</ul>;

  return (
    <div>
      {cartItems}
      <div className={classes.total}> 
        <span>Total Amount</span>
        <span>38.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Complete</button>
      </div>
    </div>
  )
};

export default Cart;
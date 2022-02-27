import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CompleteOrder from './CompleteOrder';

const Cart = props => {
  const [completeOrder, setCompleteOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const completeOrderHandler = () => {
    setCompleteOrder(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://react-http-9b1e1-default-rtdb.firebaseio.com/orders.json", {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = 
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      )}
    </ul>;

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={completeOrderHandler}>
          Complete Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      { cartItems }
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {completeOrder && (
            <CompleteOrder onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />
        )}
        {!completeOrder && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <p>Order sent!</p>

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
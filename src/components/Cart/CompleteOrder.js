import {useRef, useState} from 'react';

import classes from './CompleteOrder.module.css';

const isEmpty = value => value.trim() === '';

const CompleteOrder = props => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    price: true,
    tally: true
  })

  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const tallyInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredTally = tallyInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPriceIsValid = !isEmpty(enteredPrice);
    const enteredTallyIsValid = !isEmpty(enteredTally);

    setFormInputsValidity({
      name:enteredNameIsValid,
      price: enteredPriceIsValid,
      tally: enteredTallyIsValid
    })

    const formIsValid = enteredNameIsValid && enteredPriceIsValid && enteredTallyIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      price: enteredPrice,
      tally: enteredTally
    });
  };

  //classes
  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`;

  const priceControlClasses = `${classes.control} ${formInputsValidity.price ? "" : classes.invalid}`;

  const tallyControlClasses = `${classes.control} ${formInputsValidity.tally ? "" : classes.invalid}`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={priceControlClasses}>
        <label htmlFor="price">Your Order Price</label>
        <input id="price" type="text" ref={priceInputRef} />
        {!formInputsValidity.price && <p>Please enter a valid price.</p>}
      </div>
      <div className={tallyControlClasses}>
        <label htmlFor="tally">Your Trip Tally</label>
        <input id="tally" type="text" ref={tallyInputRef} />
        {!formInputsValidity.tally && <p>Please enter a valid tally.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default CompleteOrder;
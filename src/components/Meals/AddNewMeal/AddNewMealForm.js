import Input from "../../UI/Input";
import classes from "./AddNewMealForm.module.css";

const MealItemForm = (props) => {
  
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        
        label="Amount"
        input={{
          id: "amount " + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};

export default MealItemForm;

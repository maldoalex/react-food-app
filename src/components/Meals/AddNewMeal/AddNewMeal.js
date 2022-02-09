import classes from "./AddNewMeal.module.css";
import Card from "../../UI/Card";
import AddNewMealForm from "./AddNewMealForm";

const AddNewMeal = (props) => {

  return (
    <section>
      <Card>
        <li className={classes.meal}>
          <div>
            <h3>
              <input type="text" placeholder="Restaurant Name" />
            </h3>
            <div className={classes.order}>
              <input type="text" placeholder="Meal Name" />
            </div>
            <div className={classes.price}>
              <input type="text" placeholder="Meal Price" />
            </div>
          </div>
          <div>
            <AddNewMealForm />
          </div>
        </li>
      </Card>
    </section>
  );
};

export default AddNewMeal;

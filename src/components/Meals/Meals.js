import {Fragment} from 'react';
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
// import AddNewMeal from './AddNewMeal/AddNewMeal';

const Meals = props => {
  return (
    <Fragment>
      <MealsSummary />
      {/* <AddNewMeal /> */}
      <AvailableMeals />
    </Fragment>
  )
};

export default Meals;
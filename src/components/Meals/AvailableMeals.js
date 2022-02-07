import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "McDonalds",
    order: "Big Mac Meal",
    drink: "Dr. Pepper",
    other: "Large Size, no onion",
    price: 8,
  },
  {
    id: "m2",
    name: "Chick-fil-A",
    order: "Spicy Sandwich Meal",
    drink: "Lemonade",
    other: "Large Size, chick-fil-a sauce",
    price: 10,
  },
  {
    id: "m3",
    name: "Wendy's",
    order: "Nuggets Meal",
    drink: "Coke",
    other: "Large Size, 8-count, bbq sauce",
    price: 11,
  },
  {
    id: "m4",
    name: "Taco Bell",
    order: "Chalupa Cravings Box",
    drink: "Baja Blast",
    other: "Large Size, extra hot sauce",
    price: 9,
  },
];

const AvailableMeals = () => {
  const mealsList =  DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} order={meal.order} price={meal.price} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;

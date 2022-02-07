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
    name: "Chick-fil-A",
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
  const mealsList =  DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  )
}

export default AvailableMeals;

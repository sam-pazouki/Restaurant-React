import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const COOL_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 25.99,
    },
    {
        id: 'm2',
        name: 'Sandwich',
        description: 'Big Roast Beef',
        price: 17,
    },
    {
        id: 'm3',
        name: 'Cheese Burger',
        description: 'American, Meat, mussarela',
        price: 18.5,
    },
    {
        id: 'm4',
        name: 'Vegeterian',
        description: 'Healthy, Tofutti, Cheese, Cucumber, Avocado ',
        price: 22.5
    },
];

const AvailableMeals = () => {
    const mealList = COOL_MEALS.map((meal) => (
        <MealItem 
        key={meal.id}
        id={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price} />));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;








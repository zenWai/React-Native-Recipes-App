import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route }) {
    const categoryChosen = route.params.categoryPressed;

    const displayMeals = MEALS.filter((mealItem) => {
        //Meals belong to multiple categories
        //if -1 not found
        return mealItem.categoryIds.indexOf(categoryChosen) >= 0;
    });

    return <MealsList displayMeals={displayMeals}></MealsList>
}

export default MealsOverviewScreen;
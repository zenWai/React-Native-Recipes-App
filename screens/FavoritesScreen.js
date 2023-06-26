import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

function FavoritesScreen() {
    /*const favoriteMealsCtx = useContext(FavoritesContext);*/
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals =
        MEALS.filter(meal =>
            /*favoriteMealsCtx.ids.includes(meal.id)*/
            favoriteMealsIds.includes(meal.id)
        );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    No favorite meals found. Start adding some!
                </Text>
            </View>
        );
    }

    return <MealsList displayMeals={favoriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
export default FavoritesScreen;
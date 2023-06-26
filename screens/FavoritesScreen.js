import MealsList from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {useContext} from "react";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals =
        MEALS.filter(meal =>
            favoriteMealsCtx.ids.includes(meal.id)
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
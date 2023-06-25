import { MEALS } from "../data/dummy-data";
import {FlatList, StyleSheet, Text, View} from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
    const categoryChoosen = route.params.categoryPressed;

    const displayMeals = MEALS.filter((mealItem) => {
        //Meals belong to multiple categories
        //if -1 not found
        return mealItem.categoryIds.indexOf(categoryChoosen) >= 0;
    });
    const renderMealItem = itemData => {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
        }
        return (
            <MealItem {...mealItemProps}/>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
export default MealsOverviewScreen;
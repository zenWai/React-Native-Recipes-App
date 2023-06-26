import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealsList({ displayMeals }) {
    const renderMealItem = itemData => {
        const mealItemProps = {
            id: itemData.item.id,
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsList;
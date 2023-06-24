import { MEALS } from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

function MealsOverviewScreen({ route }) {
    const category = route.params.categoryPressed;

    return (
        <View style={styles.container}>
            <Text>Test - {category}</Text>
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
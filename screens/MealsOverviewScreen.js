import { MEALS } from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

function MealsOverviewScreen() {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
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
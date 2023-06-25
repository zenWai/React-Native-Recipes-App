import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {CATEGORIES} from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#4e0101' },
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#690000'},
                }}>
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                        options={{
                            title: 'Meal Categories',
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        options={({route, navigation}) => {
                            const categoryChosenId = route.params.categoryPressed;
                            const categoryName = CATEGORIES.find(category => category.id === categoryChosenId).title;
                            return {
                                title: categoryName,
                            };
                        }}
                    />
                    <Stack.Screen
                        name="MealDetails"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

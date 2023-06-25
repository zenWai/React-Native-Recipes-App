import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {CATEGORIES, MEALS} from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#4e0101' },
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: '#690000'},
        }}>
            <Drawer.Screen
                name="DrawerCategories"
                component={CategoriesScreen}
                options={{
                    title: 'Categories',
                }}
            />
            <Drawer.Screen  name="DrawerFavorites" component={FavoritesScreen}/>
        </Drawer.Navigator>
    );
}

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
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
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
                        options={({route}) => {
                            const mealId = route.params.mealId;
                            const selectedMeal = MEALS.find((meal) => meal.id === mealId);
                            return {
                                title: selectedMeal.title,
                            };
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    /* StatusBar use - background app color is set on app.json*/
    return (
        <>
            <StatusBar style="dark"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Categories" component={CategoriesScreen}/>
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

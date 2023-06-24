import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
    /* StatusBar use - background app color is set on app.json*/
    return (
        <>
            <StatusBar style={"light"}/>
            <CategoriesScreen/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";


function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id,
        });
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //4 ripple effect and makes ios lose shadow
        backgroundColor: 'white', //IOS for shadows and tile background
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    //innerContainer will add round border on IOS
    //since Overflow is visible
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: { //4 ios ripple effect
        opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,0.3)', //simulates android ripple 'ok'
    },
})

export default MealItem;
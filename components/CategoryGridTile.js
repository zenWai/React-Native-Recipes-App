import {Pressable, StyleSheet, Text, View, Platform} from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => [
                styles.pressable,
                pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white', //IOS for shadows and tile background
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //4 ripple effect and makes ios lose shadow
    },
    pressable: {
        flex: 1,
    },
    buttonPressed: { //4 ios ripple effect
        opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,0.3)', //simulates android ripple 'ok'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
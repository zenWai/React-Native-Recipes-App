import {StyleSheet, Text, View} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#d09292',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#d09292',
    }
});
export default Subtitle;
import { View, Text, StyleSheet } from "react-native"
function AllExpenses() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>All Expenses Screen</Text>
        </View>
    );
};

export default AllExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
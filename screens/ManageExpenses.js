import { View, Text, StyleSheet } from "react-native"
function ManageExpenses() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Manage Expenses Screen</Text>
        </View>
    );
};

export default ManageExpenses;

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
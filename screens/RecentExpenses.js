import { View, Text, StyleSheet } from "react-native"
function RecentExpenses() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Recent Expenses Screen</Text>
        </View>
    );
};

export default RecentExpenses;

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
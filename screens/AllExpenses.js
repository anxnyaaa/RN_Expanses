import { View, Text, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expenses/ExpensesOutput";
function AllExpenses() {
    return (
        <View style={styles.rootContainer}>
            <ExpensesOutput expensesPeriod="Total"/>
        </View>
    );
};

export default AllExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
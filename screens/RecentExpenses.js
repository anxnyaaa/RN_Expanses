import { View, Text, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expenses/ExpensesOutput";
function RecentExpenses() {
    return (
        <View style={styles.rootContainer}>
            <ExpensesOutput expensesPeriod="Last 7 Days"/>
        </View>
    );
};

export default RecentExpenses;

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
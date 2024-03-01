import { View, Text, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date > date7DaysAgo) && (expense.date<= today);
    });

    return (
        <View style={styles.rootContainer}>
            <ExpensesOutput 
                expenses={recentExpenses} 
                expensesPeriod="Last 7 Days" 
                fallbackText="No expenses registered for the last 7 days."
            />
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
import { View, Text, StyleSheet } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <View style={styles.rootContainer}>
            <ExpensesOutput 
                expenses={expensesCtx.expenses} 
                expensesPeriod="Total"
                fallbackText="No registered expenses found!!"
            />
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
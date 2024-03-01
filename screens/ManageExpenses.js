import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import IconButton from '../components/UI/IconButton'
import {GlobalStyles} from '../constants/styles'
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpenses({route, navigation}) {
    const expenseCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expenseCtx.expenses.find(
        expense => expense.id === editedExpenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();        
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, expenseData);
        } else {
            expenseCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.rootContainer}>
            <ExpenseForm 
                submitButtonLabel={isEditing? 'Update' : 'Add'} 
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpense}
            />
            
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
                </View>
            )}
            {/* <Text style={styles.text}>Manage Expenses Screen</Text> */}
        </View>
    );
};

export default ManageExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    // text: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },     
    
})
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
function ManageExpenses({route, navigation}) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

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
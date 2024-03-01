import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues? defaultValues.description : '',
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    function submitHandler() {
        const expenseData= {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description,
        };

        const amountIsValid = !isNaN(expenseData.amount) &&  expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Invalid Input', 'Please check your input values.');
            return;
        }

        onSubmit(expenseData);
    }

    return (
        <View>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>                
                <Input style={styles.rowInput} label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText:inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount,
                }}/>
                <Input style={styles.rowInput} label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxlength: 10,
                    onChangeText:inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date,
                }}/>
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText:inputChangedHandler.bind(this, 'description'),
                value: inputValues.description,
                //autoCapitalize: 'none',
                //autocorrect: false //default is true                
            }}/>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})
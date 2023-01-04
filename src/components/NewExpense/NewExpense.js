import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const addNewExpenseHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    // child to parent comunication
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // child to parent comunication
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    return (<div className='new-expense'>
        {!isEditing && <button onClick={addNewExpenseHandler}>Add New</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>)

}

export default NewExpense;
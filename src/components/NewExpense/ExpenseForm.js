import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    /* There are three way to handle the use state 
        1. useState for each indivisual
        2. use as a object with spread opretor (but chnase to lose the state because its depend on previous object)
        3. use object with anonymous fn inside useState(()=> {}) with param prevState
    */

    // indivisual
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    // use object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        // handle indivisual state
        setEnteredTitle(event.target.value);

        // handel with object

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // handel with object and anonymous fn

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // child to parent comunication
        props.onSaveExpenseData(expenseData);
        // console.log('ecpense Data', expenseData)
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.1" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-2023" max="2024-12-31" onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>)
}
export default ExpenseForm
import React, { useState } from 'react';
// import ExpenseItem from "./ExpenseItem"
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpenseFilter from "../NewExpense/ExpenseFilter"
import ExpensesChart from './ExpensesChart';

import './Expenses.css'

const Expenses = (props) => {
    const [filteredyear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredyear
    })

    // another way to use conditional rendering using variable

    // let expenseContent = <p>No Expense Found</p>
    // if (filterExpenses.length > 0) {
    //     expenseContent = filterExpenses.map((item) => (
    //         < ExpenseItem
    //             key={item.id}
    //             title={item.title}
    //             amount={item.amount}
    //             date={item.date}
    //         />
    //     ))
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredyear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filterExpenses} />

                {/* list rendering  */}
                {/* {filterExpenses.map((item) => (
                    < ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))} */}

                {/* condition rendring */}

                {/* {filterExpenses.length === 0 ? <p>No Exppense Found</p> : filterExpenses.map((item) => (
                    < ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))} */}

                {/* convert long ternary expression with && */}

                {/* {filterExpenses.length === 0 && <p>No Expense Found</p>}

                {filterExpenses.length > 0 && filterExpenses.map((item) => (
                    < ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))} */}

                {/* another way of using conditional rendring */}
                {/* {expenseContent} */}

                {/* using component */}
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>

    )
}

export default Expenses;
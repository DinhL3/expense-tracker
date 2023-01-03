import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

import React, { useState } from 'react';

function NewExpense(props) {
    const [isFormOpen, setFormOpen] = useState(false);

    function closeFormHandler() {
        setFormOpen(false)
    }

    function openFormHandler() {
        setFormOpen(true)
    }

    function submitFormHandler(expenseDataFromForm) {
        const expenseData = {
            ...expenseDataFromForm,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }



    return (
        <div className="new-expense">
            {!isFormOpen ?
                <button onClick={openFormHandler}>Add new expense</button> :
                <ExpenseForm onSubmitForm={submitFormHandler} onCloseForm={closeFormHandler} />}
        </div>
    );
}

export default NewExpense;
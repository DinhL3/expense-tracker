import { useState } from 'react';

import "./ExpenseForm.scss";

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        }

        props.onSubmitForm(expenseData);
        props.onCloseForm();

        setTitle('');
        setAmount('');
        setDate('');
    }

    function cancelButtonHandler() {
        props.onCloseForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                {/* button of type 'button' does not submit form */}
                <button type="button" onClick={cancelButtonHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
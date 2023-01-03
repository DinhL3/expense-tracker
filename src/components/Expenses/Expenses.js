import { useState } from 'react';

import './Expenses.scss';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';


function Expenses(props) {
    const [filter, setFilter] = useState('2022');

    function filterHandler(choice) {
        setFilter(choice);
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filter);

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedFilter={filter} onChoiceSelected={filterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
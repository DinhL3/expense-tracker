import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPESES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPESES);

  function addExpenseHandler(newExpense) {
    setExpenses(oldExpenses => [newExpense, ...oldExpenses])
    //Above is the short code to make new state based on old state.
    //Long, dumb code is like this:
    // const oldExpenses = expenses;
    // const newExpenses = [newExpense, ...oldExpenses];
    // setExpenses(newExpenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
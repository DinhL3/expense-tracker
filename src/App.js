import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPESES = [
  {
    id: 'e1',
    title: 'Rent',
    amount: 311.46,
    date: new Date(2023, 1, 3),
  },
  {
    id: 'e2',
    title: 'Cuckoo Chicken Wings',
    amount: 8.9,
    date: new Date(2023, 1, 2)
  },
  {
    id: 'e3',
    title: 'Video Player App',
    amount: 5.49,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Flight tickets',
    amount: 185.56,
    date: new Date(2022, 12, 20),
  },
  {
    id: 'e5',
    title: 'Vegan Wok',
    amount: 14,
    date: new Date(2021, 11, 9),
  },
  {
    id: 'e6',
    title: 'Bank fee',
    amount: 4.65,
    date: new Date(2021, 7, 20),
  },
  {
    id: 'e7',
    title: 'Monthly tram card',
    amount: 42,
    date: new Date(2021, 5, 5),
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

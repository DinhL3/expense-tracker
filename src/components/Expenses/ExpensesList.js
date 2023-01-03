import './ExpensesList.scss'
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {

    //NEW: JSX can now be stored in JS code

    /* Important: rendering list
    key is required for React to uniquely identify each item then add (not re-rendering the entire list)*/
    if (props.filteredExpenses.length === 0)
        return <h2 className='expenses-list__fallback'>No expenses found</h2>

    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map((item) => (
                <ExpenseItem
                    key={ExpenseItem.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </ul>
    )
}

export default ExpensesList;
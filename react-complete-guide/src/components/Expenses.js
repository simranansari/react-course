import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';

function Expenses(props) {

    return (
        <div className="expenses">
        <ExpenseItem expenseData={props.expenses[0]}/>
        <ExpenseItem expenseData={props.expenses[1]}/>
        <ExpenseItem expenseData={props.expenses[2]}/>
        <ExpenseItem expenseData={props.expenses[3]}/>
        </div>
    );
    
}

export default Expenses;
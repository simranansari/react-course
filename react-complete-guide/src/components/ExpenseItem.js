import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expenseData.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
    <Card className="expense-item">
         {/* <div>{props.expenseData.date.toISOString()}</div> */}
         <ExpenseDate date={props.expenseData.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
        <div className="expense-item__price">${props.expenseData.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    );
}
export default ExpenseItem;
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExerciseComponent from './components/ExerciseComponent';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  return (
    <div className="App">
      <p>Let's get started</p>
      <ExpenseItem expenseData={expenses[0]}/>
      <ExpenseItem expenseData={expenses[1]}/>
      <ExpenseItem expenseData={expenses[2]}/>
      <ExpenseItem expenseData={expenses[3]}/>
      <ExerciseComponent />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

//function App() 
const App = () =>
{

  const expenses = [
    {
      id:1, title:"Car insurance",amount:10,date:new Date(2021,1,3)
    },
    {
      id:2, title:"Marine insurance",amount:30,date:new Date(2020,2,3)
    },
    {
      id:3, title:"Home insurance",amount:20,date:new Date(2021,4,23)
    }        
  ];

  /*
  return React.createElement(
      'div',
      {},
      React.createElement('h2', {} , "Let's get started"),
      React.createElement(Expenses, { items: expenses } )
    );
  */
  

  return (
  <div>
    <h2>Lets go</h2>
    <NewExpense></NewExpense>
    <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>

    <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount}  date={expenses[1].date} ></ExpenseItem>

    <ExpenseItem id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount}  date={expenses[2].date} ></ExpenseItem>    
  </div>
  );


}

export default App;

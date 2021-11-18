import React, { useState } from 'react';

import  ExpenseDate from './ExpenseDate';
import  './ExpenseItem.css';
import Card from '../UI/Card';

//function ExpenseItem(props)
const ExpenseItem = (props) =>
{

	// name that described values , set + name that desribes 
	// always returns 2 values
	// 1st is current state value , state updating function

	const [title , setTitle ] = useState(props.title);

	const clickHandler = () => {
		setTitle("Updated");
		console.log(title);		
	};

	return (
		<Card className="expense-item">				
				<ExpenseDate date={props.date} ></ExpenseDate>

				<div>{props.id}</div>
				<div className="expense-item__description">	
					<h2>{props.title}</h2>
					<div className="expense-item__price">
							{props.amount}	
					</div>
					<button onClick={clickHandler} >{title}</button>
				</div>	
				<hr/>
		</Card>
		);
}


export default ExpenseItem;
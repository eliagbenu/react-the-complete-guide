import  ExpenseDate from './ExpenseDate';
import  './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props)
{

	return (
		<Card className="expense-item">				
				<ExpenseDate date={props.date} ></ExpenseDate>

				<div>{props.id}</div>
				<div className="expense-item__description">	
					<h2>{props.title}</h2>
					<div className="expense-item__price">
							{props.amount}	
					</div>
				</div>	
				<hr/>
		</Card>
		);
}


export default ExpenseItem;
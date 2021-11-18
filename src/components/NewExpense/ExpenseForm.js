import React from 'react';

const ExpenseForm = (props) =>
{
    const titleChangeHandler=(event)=>
    {
        console.log("t changed");
        console.log(event.target.value);
    }
    return <form>
        <table>
            <tr>
                <td>Title</td>
                <td><input type="text" onChange={titleChangeHandler} /></td>
            </tr>
            <tr>
                <td>Amount</td>
                <td><input type="number" /></td>
            </tr>
            <tr>
                <td>Date</td>
                <td><input type="date" /></td>
            </tr>                        
            <tr>
                <td colspan="2">
                    <button type="submit">Submit</button> 
                </td>
            </tr>                                    
            </table> 
    </form>
}

export default ExpenseForm;
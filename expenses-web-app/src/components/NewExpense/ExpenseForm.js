import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
 
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const enterTitle = (event) => {
    setInput((preState) => {
      return { ...preState, title: event.target.value };
    });
  };

  const enterAmount = (event) => {
    setInput((preState) => {
      return { ...preState, amount: event.target.value };
    });
  };

  const enterDate = (event) => {
    setInput((preState) => {
      return { ...preState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: input.title,
      amount: input.amount,
      date: input.date,
    };
    props.onSaveExpenseData(expenseData);
    // clear all the data once submit
    setInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expnse__control">
          <label>Title</label>
          <input type="text" value={input.title} onChange={enterTitle}></input>
        </div>
        <div className="new-expnse__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={input.amount}
            onChange={enterAmount}
          ></input>
        </div>
        <div className="new-expnse__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={enterDate}
            value={input.date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

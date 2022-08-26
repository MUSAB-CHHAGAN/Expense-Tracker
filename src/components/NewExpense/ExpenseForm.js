/** @format */
import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = props => {
  const [enteredTitle, updatedTitle] = useState("");
  const [enteredAmount, updatedAmount] = useState("");
  const [enteredDate, UpdatedDate] = useState("");
  const titleChangeHandler = event => {
    updatedTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    updatedAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    UpdatedDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(enteredData);

    updatedTitle("");
    updatedAmount("");
    UpdatedDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

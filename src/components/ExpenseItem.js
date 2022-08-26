/** @format */
import React from "react";

import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>-
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;

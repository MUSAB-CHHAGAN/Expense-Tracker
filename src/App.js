/** @format */

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const DummyExpenses = [
  {
    id: "e1",
    title: "Mobile Charger",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(previousExpenses => {
      const allExenses = [expense, ...previousExpenses];
      console.log(allExenses);
      return allExenses;
    });
  };
  const delteHandler = id => {
    setExpenses(
      expenses.filter(expense => {
        return expense.id !== id;
      })
    );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} onDelete={delteHandler} />
    </div>
  );
}

export default App;

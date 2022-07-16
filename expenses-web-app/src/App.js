import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useState } from "react";

const initialExpenses = [
  { id: '1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: '2', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: '3', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
];
const App = () => {
  const [expenses, addExpenses] = useState(initialExpenses);

  const addExpenseDataHandler = (enteredExpenseData) => {
    addExpenses((preExpenses) => {
      return [enteredExpenseData, ...preExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

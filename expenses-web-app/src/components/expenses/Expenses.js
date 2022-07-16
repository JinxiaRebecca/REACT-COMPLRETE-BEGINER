import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((item) => {
    return filteredYear === new Date(item.date).getFullYear().toString();
  });

  let  expressContent = <p>No Expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expressContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onchangeFilter={filterChangeHandler}
        />
        {expressContent}
      </Card>
    </div>
  );
};

export default Expenses;

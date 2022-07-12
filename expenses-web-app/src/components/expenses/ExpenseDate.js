import "./ExpenseDate.css";

const ExpenseDate = (expenseDate) => {
  const month = expenseDate.date.toLocaleString("en-US", { month: "long" });
  const date = expenseDate.date.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
};

export default ExpenseDate;

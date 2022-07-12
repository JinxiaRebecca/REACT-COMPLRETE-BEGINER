import "./ExpenseDate.css";

const ExpenseDate = (expenseDate) => {
  const month = expenseDate.date.toLocaleString("en-US", { month: "long" });
  const date = expenseDate.date.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_date">{date}</div>
    </div>
  );
};

export default ExpenseDate;

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.name}</h2>
        <div className="exppence-item_price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  ];
  return (
    <>
      <NewExpense></NewExpense>
      <Card className="App">
        <ExpenseItem
          name={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
      </Card>
    </>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import ExpensesData from "./components/ExpensesData";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [expenses, setExpenses] = useState(ExpensesData);
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: expenses.length + 1,
      amount: Number(formData.amount),
    };
    setExpenses([...expenses, newExpense]);
    setFormData({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((item) => {
    const name = item.expense.toLowerCase();
    const description = item.description.toLowerCase();
    const search = searchTerm.toLowerCase();
  
    return name.indexOf(search) > -1 || description.indexOf(search) > -1;
  });
  

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (a.expense < b.expense) return -1;
    if (a.expense > b.expense) return 1;
    return 0;
  });
  

  return (
    <div className="container">
      <div className="sidebar">
        <h2><span>Add Expense</span></h2>
        <ExpenseForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="main">
        <div className="header">
          <h1>Expense Tracker</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <ExpenseTable expenses={sortedExpenses} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;

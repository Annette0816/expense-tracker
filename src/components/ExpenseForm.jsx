const ExpenseForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="expense"
        placeholder="Enter expense name"
        value={formData.expense}
        onChange={handleChange}
       
      />
      <input
        type="text"
        name="description"
        placeholder="Enter expense description"
        value={formData.description}
        onChange={handleChange}
       
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={handleChange}
       
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
        
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
       
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;

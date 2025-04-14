const ExpenseTable = ({ expenses, handleDelete }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((data) => (
          <tr key={data.id}>
            <td>{data.expense}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
            <td>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;

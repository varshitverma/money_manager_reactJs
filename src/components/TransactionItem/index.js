// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-table-row">
      <p className="transaction-info">{title}</p>
      <p className="transaction-info">Rs {amount}</p>
      <p className="transaction-info">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTransaction}
          //   testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

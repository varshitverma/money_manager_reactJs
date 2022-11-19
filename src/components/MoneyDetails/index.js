// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, incomeAmount, expenseAmount} = props

  return (
    <div className="expenses-container">
      <div className="expense-cards balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p className="card-name">Your Balance</p>
          <p
            className="card-balance"
            //   testid="balanceAmount"
          >
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="expense-cards income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p className="card-name">Your Income</p>
          <p
            className="card-balance"
            //    testid="incomeAmount"
          >
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expense-cards expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p className="card-name">Your Expenses</p>
          <p
            className="card-balance"
            //   testid="expensesAmount"
          >
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

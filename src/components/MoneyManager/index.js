import {Component} from 'react'
import './index.css'

import {v4 as uuIdv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onSubmitTransactionDetails = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = optionType
    const newTransaction = {
      id: uuIdv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionsId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let income = 0
    let balanceAmount = 0
    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expenses += eachTransaction.amount
      }
    })
    balanceAmount = income - expenses
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balance = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="card">
          <div className="user-name-container">
            <h1 className="main-heading">Hi, Richard</h1>
            <p className="desc">
              Welcome back to your
              <span className="desc-inner"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalBalance={balance}
            incomeAmount={incomeAmount}
            expenseAmount={expenses}
          />
          <div className="transactions-container">
            <form
              className="transfer-form"
              onSubmit={this.onSubmitTransactionDetails}
            >
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="labels">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />

              <label htmlFor="amount" className="labels">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />

              <label className="labels" htmlFor="type">
                TYPE
              </label>
              <select
                className="input"
                id="type"
                value={optionId}
                onChange={this.onChangeOptionsId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
            <div className="transactions-history-container">
              <h1 className="heading">History</h1>
              <div className="transactions-table-container">
                <ul className="table-column-names">
                  <li className="transaction-column-names">
                    <p className="column-names">Title</p>
                    <p className="column-names">Amount</p>
                    <p className="column-names">Type</p>
                  </li>
                  <div className="all-transactions">
                    {transactionsList.map(eachTransaction => (
                      <TransactionItem
                        key={eachTransaction.id}
                        transactionDetails={eachTransaction}
                        deleteTransaction={this.deleteTransaction}
                      />
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

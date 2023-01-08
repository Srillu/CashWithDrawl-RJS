// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    const {balance} = this.state

    if (balance > value) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    } else {
      this.setState({balance: 0})
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="main-div">
        <div className="div-container">
          <div className="name-container">
            <div className="s-icon">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="with-draw">{balance}</p>
              <p className="your-balance rupees">In Rupees</p>
            </div>
          </div>
          <p className="with-draw">WithDraw</p>
          <p className="your-balance">Choose Sum (IN RUPEES)</p>
          <ul className="ul-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                updateBalance={this.updateBalance}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

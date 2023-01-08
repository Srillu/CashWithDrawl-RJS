// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, updateBalance} = props
  const {value} = denominationItem

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button
        type="button"
        className="list-items"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

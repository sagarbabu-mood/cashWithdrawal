import './index.css'

const DenominationItem = props => {
  const {details, reduceAmount} = props
  const {value} = details
  const reduce = () => {
    console.log(value)
    reduceAmount(value)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={reduce}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

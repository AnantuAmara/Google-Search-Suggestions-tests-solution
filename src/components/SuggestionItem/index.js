// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsListItems, changedSearchValue} = props
  const {suggestion} = suggestionsListItems

  const changedSearchInput = () => {
    changedSearchValue(suggestion)
  }
  return (
    <li className="list-item-container">
      <p className="paragraph">{suggestion}</p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        onClick={changedSearchInput}
      />
    </li>
  )
}

export default SuggestionItem

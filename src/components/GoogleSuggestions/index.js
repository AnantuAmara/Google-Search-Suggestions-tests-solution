// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  changedSearchValue = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="container-2">
          <div className="input-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="input"
              type="search"
              placeholder="search Google"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="list-container">
            {searchResults.map(each => (
              <SuggestionItem
                suggestionsListItems={each}
                key={each.id}
                changedSearchValue={this.changedSearchValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

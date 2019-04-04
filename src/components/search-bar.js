import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = { term: ''}
  
  onFormSubmit = event => {
    event.preventDefault()
    //callback from parent component;
    this.props.onFormSubmit(this.state.term)
  }
  onInputChange = event => {
    this.setState({
      term: event.target.value
    })
  }
  
  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Enter a number: </label>
        <input type='text' value={this.state.term} onChange={this.onInputChange} />
      </form>
    )
  }
}

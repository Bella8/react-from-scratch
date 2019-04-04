import React, { Component } from 'react'
import  SearchBar  from "./search-bar"
import  StarWarList from './star-war-list'
import swapi  from '../apis/swapi'

export default class StarWarIndex extends Component {
  
  state = { person: "" }
  
  componentDidMount() {
    this.onFormSubmit('1')
  }
  onFormSubmit = async term => {
    const response = await swapi.get(`${term}/`)
    this.setState({person: response.data})
  }

  render() {
  return (
    <div>
    <div className="star-war-display" style={{ display: "flex", justifyContent: "center", margin: '40px' }}>
      <SearchBar onFormSubmit={this.onFormSubmit} />
    </div>
    <StarWarList person={this.state.person} />
    </div>
  )
  }
}

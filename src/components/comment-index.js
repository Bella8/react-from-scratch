import React, { Component } from 'react'
import CommentForm from './comment-form'
import CommentDisplay from './comment-display'

export default class CommentIndex extends Component {
  state = {
    commentData: {
    name : null,
    title: null,
    comment: null
    }
  }
  onFormSubmit = (commentData) => {
    this.setState({
    commentData
  })
  }
  
  render () {
    return ( 
    <div>    
      <CommentForm onFormSubmit={this.onFormSubmit}/>
      <h3>Read Comment</h3>
      <CommentDisplay commentData={this.state.commentData}/>
    </div>
    )
  }
}

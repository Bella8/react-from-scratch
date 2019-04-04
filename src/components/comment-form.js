import React, { Component } from 'react'

export default class CommentForm extends Component {
  state = {
    name: '',
    title: '',
    comment: ''
  }
  onFormSubmit = event => {
    event.preventDefault()
    const commentData = {
      name: this.state.name,
      title: this.state.title,
      comment: this.state.comment
    }
    this.props.onFormSubmit(commentData)
  }
  onChangeName = event => {
    this.setState({
    name: event.target.value
    })
  }

  onChangeTitle = event => {
    this.setState({
    title: event.target.value
    })
  }

  onChangeComent = event => {
    this.setState({
    comment: event.target.value
  })
}

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Name: </label>
          <input onChange={this.onChangeName} value={this.state.name} />
        </div>
        <div className="field">
          <label>Add a headline: </label>
          <input onChange={this.onChangeTitle} value={this.state.title} />
        </div>
        <div className="field">
          <label>Comment: </label>
          <textarea
            onChange={this.onChangeComent}
            value={this.state.comment}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


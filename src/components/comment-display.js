import React from 'react'

const CommentDisplay = ({ commentData }) => (
  commentData.name ? (
    <div>
      <div>{commentData.name}</div>
      <h4>{commentData.title}</h4>
      <p>{commentData.comment}</p>
    </div>
  ) : null
)

export default CommentDisplay

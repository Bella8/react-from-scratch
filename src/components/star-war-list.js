import React from 'react'

const StarWarList = ({ person }) => (
  person ? (
    <table className="ui celled table">
      <thead>
        <tr>
            <th>Name</th>
            <th>Height</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>{person.name}</td>
            <td>{person.height}</td>
          </tr>
      </tbody>
    </table>
  ) : null
)

export default StarWarList

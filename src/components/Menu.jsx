import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>Menu
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/doctores">Doctores</a>
            </li>
        </ul>
      </div>
    )
  }
}

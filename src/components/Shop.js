import React, { Component } from 'react'

export default class Shop extends Component {
  componentDidMount() {
    this.props.beerActions.fetchBeers()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hello, Beer Shop</p>
      </div>
    )
  }
}

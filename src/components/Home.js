import React, { Component } from 'react'
import { connect } from 'react-redux'
import getArticles from '../actions/index'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.getArticles()
  }

  render () {
    return (
      <div>
        <h1>Articles App HomePage</h1>
        <Link to='articles/new'>
          Create New Article
        </Link>
      </div>
    )
  }
}

export default connect(null, { getArticles })(Home)

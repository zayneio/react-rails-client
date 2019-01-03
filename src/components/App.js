import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import NewArticle from './NewArticle'

class App extends Component {
	render (){
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/articles/new" component={NewArticle} />
			</Switch>
		)
	}
}

export default App
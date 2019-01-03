import React, {Component} from 'react'

export default class NewArticle extends Component {
	render(){
		return (
      <div>
        <h1>Create New Article</h1>
      	<form>
           <label>Title</label><br/>
           <input type="text" name="title"/>
        </form>
      </div>
		)
	}
}
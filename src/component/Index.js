import React from 'react'
class Index extends React.Component{
	render(){
		console.log('loaded')

		return(
			<div className="row">
				<input className="form-control" placeholder="Input Activity" type="text" />
				<button className="btn-submit">Add</button>
			</div>
			)
	}
}

export default Index
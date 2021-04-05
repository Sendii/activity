import React from 'react'
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			counter: 0,
			data: []
		}		
	}	
	changeData = () => {
		this.state.data.push({
			name: 'nama 10'
		})
		this.setState({
			counter: this.state.counter + 1
		})
		console.log(this.state.data)
	}
	render(){		
		return(
			<div className="row">
				<input className="form-control" placeholder="Input Activity" type="text" />
				<button className="btn-submit" onClick={this.changeData}>Add</button>
			</div>
			)
	}
}

export default Index
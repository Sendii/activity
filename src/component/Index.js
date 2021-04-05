import React from 'react'
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			counter: 0,
			activity: '',
			data: []
		}		
	}	
	submitData = () => {
		this.state.data.push({
			name_activity: this.state.activity
		})
		this.setState({
			activity: '',
			counter: this.state.counter + 1
		})
		console.log(this.state.data)
	}
	changeValue = (e) => {
		this.setState({
			activity: e.target.value
		})		
	}
	render(){
	const content = Object.entries(this.state.data).map((v, k) => {
		return <li key={k}>{v[1].name_activity}</li>
	})		
		return(
			<div className="row">
				<input className="form-control" value={this.state.activity} onChange={this.changeValue} placeholder="Input Activity" type="text" />
				<button className="btn-submit" onClick={this.submitData}>Add</button>

				<ul>
				{content}
				</ul>
			</div>
			)
	}
}

export default Index
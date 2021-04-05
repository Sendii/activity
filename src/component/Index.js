import React from 'react'
import Card from './Card'
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
		if (this.state.activity) {
			this.state.data.push({
				name_activity: this.state.activity
			})
			this.setState({
				activity: '',
				counter: this.state.counter + 1
			})
		}else{
			alert('inputan tidak boleh kosong')
		}
	}
	changeValue = (e) => {
		this.setState({
			activity: e.target.value
		})		
	}
	render(){
	const content = Object.entries(this.state.data).map((v, k) => {
		return <Card key={k} text={v[1].name_activity}/>
	})		
		return(
			<div className="row">
				<input className="form-control" value={this.state.activity} onChange={this.changeValue} placeholder="Input Activity" type="text" />
				<button className="btn-submit" onClick={this.submitData}>Add</button>
				
				{content}
			</div>
			)
	}
}

export default Index
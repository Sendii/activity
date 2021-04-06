import React from 'react'

class Card extends React.Component{
	render(){
		return (
			<div className="card">
			<div className="close"></div>
			{this.props.text}</div>
		)
	}
}

export default Card
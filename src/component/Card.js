import React from 'react'

class Card extends React.Component{
	render(){
		return (
			<div className="card">{this.props.text}</div>
		)
	}
}

export default Card
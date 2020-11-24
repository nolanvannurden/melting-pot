import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feed extends Component {
	render(){
		return(
			<div>{!this.props.isLoggedIn ? 
				<div>This is the Feed component</div>
				:
				<div>Welcome, {this.props.user.username} to the Bird Feeder</div>}
				</div>
		)
	}
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Feed);
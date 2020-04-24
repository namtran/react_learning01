import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchFieldAction } from '../actions';

const mapStateToProps = state => {
	return {
		//searchField: state.searchRobotsReducer.searchField
		searchField: state.searchField
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value))
	}
}
class App extends Component
{
	
	constructor()
	{
		super()
		this.state = {
			robots: []
		}
	}
	componentDidMount()
	{
		console.log(this.props.store);
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		})
		.then(users =>
		{
			this.setState({robots: users});
		})
		
	}
	
	render(){
		//const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(this.state.robots.length === 0)
		{
			return (
				<div>
					<h1>Loading</h1>
				</div>
				);
		}
		else
		{
			return(
			<div className='tc'>
				<h1 className='f2'>Robo Friends</h1>
				<SearchBox searchChange={ onSearchChange }/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={ filteredRobots }/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
		}

		
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
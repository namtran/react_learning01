import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>
{
	
	//This is nore clearer way

	const CardArray = robots.map((user, i) => {
		return ( 
			<Card 
				key = {i}
				id = {robots[i].id}
				name = {robots[i].name}
				email = {robots[i].email}
				/>

		);
	});

	return (
		<div>
		{CardArray}
		</div>
		);
	

	//{
	/* This is another way (shorter display)
	return(
	<div>
		{
		robots.map((user,i) => {
			return (
				<Card 
					key={i}
					id = {robots[i].id}
					name = {robots[i].name}
					email = {robots[i].email}
				/>
				);
			})
		}
	</div>
	);
	*/
	//}
}
export default CardList;
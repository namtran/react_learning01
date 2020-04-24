import React from 'react';
const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className='pa2 tc'>
			<input 
				className='pa3 ba b--greenbg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
		);
}
export default SearchBox;
import React from 'react';
import AddToDo from './components/AddToDo';
import ToDOList from './components/ToDOList';

function App() {
	return (
		<div className='App'>
			<AddToDo />
			<ToDOList />
		</div>
	);
}

export default App;

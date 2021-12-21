import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import React from 'react';
import store from '../store';

interface Props {}

const AddToDo = (props: Props) => {
	// console.log('render AddToDo');
	return (
		<div>
			<input
				type={'search'}
				value={store.AddTodoStore.toDoInput}
				onChange={(e) =>
					store.AddTodoStore.onAddToDoInputChange(e.target.value)
				}
			></input>
			<button
				onClick={() => {
					store.editMode
						? store.editTodo()
						: store.addToDo({
								name: store.AddTodoStore.toDoInput,
								id: nanoid(),
						  });
				}}
				disabled={!store.AddTodoStore.toDoInput}
			>
				{store.editMode ? ' update' : 'Add'} To Do
			</button>
		</div>
	);
};

export default observer(AddToDo);

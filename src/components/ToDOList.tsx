import { observer } from 'mobx-react';
import React from 'react';
import store from '../store';
interface Props {}

const ToDOList = (props: Props) => {
	return (
		<div>
			you have {store.toDosLength} todos
			<ul>
				{store.toDos.map((toDo, index) => {
					return (
						<li key={toDo.id}>
							<span>{toDo.name}</span>
							<button onClick={() => store.removeTodo(toDo.id)}>
								delete
							</button>
							<button onClick={() => store.switchEditMode(toDo, index)}>
								edit
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default observer(ToDOList);

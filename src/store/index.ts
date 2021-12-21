import {
	action,
	autorun,
	computed,
	get,
	makeAutoObservable,
	observable,
	toJS,
} from 'mobx';
import { nanoid } from 'nanoid';
import { Itodo } from '../types';
import AddToDoStore from './AddToDoStore';

type EditedTodo = Itodo & { index?: number };
class Store {
	toDos: Itodo[] = [];
	editMode: boolean = false;
	editedToDo: EditedTodo = {} as EditedTodo;
	/* @computed get toDosLength() {
		return this.toDos.length;
	} */
	get toDosLength() {
		return this.toDos.length;
	}
	AddTodoStore = new AddToDoStore();
	constructor() {
		makeAutoObservable(this, {
			toDosLength: computed,
			todoWithoutIndex: computed,
		});
	}

	addToDo(toDo: Itodo) {
		this.toDos = [...this.toDos, toDo];
		this.AddTodoStore.clearInput();
	}
	removeTodo(id: string) {
		this.toDos = this.toDos.filter((todo) => todo.id !== id);
	}
	toggleEditMode() {
		this.editMode = !this.editMode;
	}
	switchEditMode(todo: Itodo, index: number) {
		this.toggleEditMode();
		this.AddTodoStore.toDoInput = todo.name;
		this.editedToDo = { ...todo, index };
	}
	get todoWithoutIndex() {
		delete this.editedToDo.index;
		return { ...this.editedToDo, name: this.AddTodoStore.toDoInput };
	}
	editTodo() {
		this.toDos.splice(this.editedToDo.index!, 1, this.todoWithoutIndex);
		store.toggleEditMode();
		this.AddTodoStore.clearInput();
	}
}
const store = new Store();
export default store;

// autorun(() => {
// 	store.AddTodoStore.toDoInput && store.toggleEditMode();
// });

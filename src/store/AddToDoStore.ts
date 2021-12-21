import { autorun, makeAutoObservable } from 'mobx';

class AddToDoStore {
	toDoInput: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	onAddToDoInputChange(text: string) {
		this.toDoInput = text;
	}
	clearInput() {
		this.toDoInput = '';
	}
}

export default AddToDoStore;

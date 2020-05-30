import { todoRef, blogRef, authRef } from '../../firebase/firebase';

export function loadBlogs() {
	return (dispatch: any) => {
		blogRef.get().then((snapshot) => {
			let docs = [] as Array<any>;
			snapshot.forEach((doc) => {
				docs.push({id: doc.id,...doc.data()});
			});
			
			dispatch({ type: 'LOAD_BLOG', payload: { blogs: docs } });
		});
	};
}

export function loadTodo() {
	return (dispatch: any) => {
		todoRef.get().then((snapshot) => {
			let docs = [] as Array<any>;
			snapshot.forEach((doc) => {
				docs.push(doc.data());
			});
			
			dispatch({ type: 'LOAD_TODO', payload: { todos: docs } });
		});
	};
}

//-----Testing
interface Todo {
	todo: string;
}
export function addTodo(todo: Array<Todo>) {
	return {
		type: 'LOAD_TODO',
		payload: { todo: todo }
	};
}

//TODO decide what auth to use

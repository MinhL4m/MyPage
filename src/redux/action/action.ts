import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:4000/api/';
export function loadBlogs() {
	return (dispatch: any) => {
		axios
			.get(`${url}blogs`)
			.then((res) => {
				let data = res.data;
				dispatch({ type: 'LOAD_BLOG', payload: { blogs: data } });
			})
			.catch((error) => {
				console.error(error);
			});
	};
}

export function loadTodo(firebase: ) {
	return (dispatch: any) => {
		axios
			.get(`${url}todo`)
			.then((res) => {
				let data = res.data;
				dispatch({ type: 'LOAD_TODO', payload: { todo: data } });
			})
			.catch((error) => {
				console.error(error);
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

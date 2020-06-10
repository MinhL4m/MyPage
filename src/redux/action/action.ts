import { todoRef, blogRef } from '../../firebase/firebase';

export function loadBlogs() {
	return (dispatch: any) => {
		blogRef.get().then((snapshot) => {
			let docs = [] as Array<any>;
			snapshot.forEach((doc) => {
				docs.push({ id: doc.id, ...doc.data() });
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
				docs.push({id:doc.id,...doc.data()});
			});
			dispatch({ type: 'LOAD_TODO', payload: { todos: docs } });
		});
	};
}

//TODO decide what auth to use

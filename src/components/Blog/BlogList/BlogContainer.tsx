import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodo, loadBlogs } from '../../../redux/action/action';
import { Todo } from './Todo';
import { Blog } from './Blog';

interface Todo {
	todo: string;
}

interface Blog {
	title: string;
	date: string;
	content: string;
	id: string;
}

function mapStateToProps(state: any) {
	return {
		todos: state.todo.todos,
		blogs: state.blog.blogs
	};
}

const BlogLogic: React.FC<{ todos: any, blogs: any, loadTodo:any, loadBlogs:any }> = ({todos, blogs, loadTodo, loadBlogs}) => {
	useEffect(() => {
		if(todos?.length === 0){
			loadTodo()
		}
		if(blogs?.length === 0){
			loadBlogs()
		}
	}, []);

	return (
		<div className="blog row">
			<Todo todoList={todos} />
			<Blog blogList={blogs} />
		</div>
	);
};

export const BlogContainer = connect(mapStateToProps, { loadBlogs, loadTodo })(BlogLogic);

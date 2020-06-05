import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {loadBlogs } from '../../../redux/action/action';
import { Blog } from './Blog';


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

const BlogLogic: React.FC<{ blogs: any, loadBlogs:any }> = ({ blogs, loadBlogs}) => {
	useEffect(() => {
		loadBlogs()
	}, []);

	return (
		<div className="blog row">
			<Blog blogList={blogs} />
		</div>
	);
};

export const BlogContainer = connect(mapStateToProps, { loadBlogs })(BlogLogic);

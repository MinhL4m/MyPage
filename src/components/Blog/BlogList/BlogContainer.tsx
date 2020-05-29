import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, loadTodo, loadBlogs } from '../../../redux/action/action';
import { Todo } from './Todo';
import { Blog } from './Blog';

const tempData = [
	{
		title: 'Redux 101',
		date: '20/May/2020',
		content: 'As an dummy like me, I take me some time to wrap my head around redux...',
		id: 'asd'
	},
	{
		title: 'Redux 101',
		date: '20/May/2020',
		content: 'As an dummy like me, I take me some time to wrap my head around redux...',
		id: 'asd'
	},
	{
		title: 'Redux 101',
		date: '20/May/2020',
		content: 'As an dummy like me, I take me some time to wrap my head around redux...',
		id: 'asd'
	}
];

const tempTodo = [
	{
		todo: 'Clear feature a'
	},
	{
		todo: 'Refractor feature b'
	}
];

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
		todoList: state.todoList,
		blogs: state.blogs
	};
}

const BlogLogic: React.FC<{ todoList: any; blogs: any; addTodo: any }> = ({ todoList, blogs, addTodo }) => {
	useEffect(() => {}, []);

	return (
		<div className="blog row">
			<Todo todoList={[]} />
			<Blog blogList={tempData} />
		</div>
	);
};

export const BlogContainer = connect(mapStateToProps, { loadBlogs, loadTodo })(BlogLogic);

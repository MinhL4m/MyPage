import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { BlogEdit } from './BlogEdit';
import { blogRef } from '../../../firebase/firebase';

interface BlogEditContainerProps {
	match: any;
	history: any;
}

const BlogEditContainer: React.FC<BlogEditContainerProps> = ({ match, history }) => {
	const [ content, setContent ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ isMarkup, setIsMarkup ] = useState(true);

	const fetchBlog = () => {
		blogRef.doc(match.params.id).get().then(function(doc) {
			if (doc.exists) {
				const obj = doc.data() as any;
				setTitle(obj.title);
				setContent(obj.content);
			} else {
				window.alert('Cannot find the blog');
			}
		});
	};

	const onSubmit = (ev: any) => {
		ev.preventDefault();
		blogRef
			.doc(match.params.id)
			.set({
				title: title,
				content: content
			})
			.then(() => {
				history.push('/admin/blog')
			})
			.catch((error) => {
				window.alert(error.message);
			});
	};

	const onDelete = (ev: any) => {
		ev.preventDefault();
		blogRef
			.doc(match.params.id)
			.delete()
			.then(() => {
				history.push('/admin/blog')
			})
			.catch((error) => {
				window.alert(error.message);
			});
	};

	useEffect(() => {
		fetchBlog();
	}, []);

	return (
		<div>
			<BlogEdit
				content={content}
				title={title}
				edit={true}
				isMarkup={isMarkup}
				onTextAreaChange={(ev) => {
					setContent(ev.target.value);
				}}
				onTitleChange={(ev) => {
					setTitle(ev.target.value);
				}}
				onToggle={() => {
					setIsMarkup(!isMarkup);
				}}
				onSubmit={onSubmit}
				onDelete={onDelete}
			/>
		</div>
	);
};

export default withRouter(BlogEditContainer)
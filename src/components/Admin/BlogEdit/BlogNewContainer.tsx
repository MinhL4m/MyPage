import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BlogEdit } from './BlogEdit';
import { blogRef, timeStamp } from '../../../firebase/firebase';

interface BlogNewContainerProps {
	history: any;
}

const BlogNewContainer: React.FC<BlogNewContainerProps> = ({ history }) => {
	const [ content, setContent ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ isMarkup, setIsMarkup ] = useState(true);

	const onSubmit = (ev: any) => {
		ev.preventDefault();
		blogRef
			.doc()
			.set({
				date: timeStamp.fromDate(new Date()),
				title: title,
				content: content
			})
			.then(function() {
				history.push('/admin/blog');
			})
			.catch((error) => {
				window.alert(error.message);
			});
	};

	return (
		<div>
			<BlogEdit
				content={content}
				title={title}
				edit={false}
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
			/>
		</div>
	);
};

export default withRouter(BlogNewContainer);

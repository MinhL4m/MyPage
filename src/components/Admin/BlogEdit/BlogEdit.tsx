import React from 'react';
import { Input } from '../../common/input/Input';
import { TextArea } from '../../common/TextArea/TextArea';
import './blogEdit.css';
import { ToggleButton } from '../../common/toggleButton/ToggleButton';
import ReactMarkDown from 'react-markdown';

interface BlogEditProps {
	edit: boolean;
	title: string;
	content: string;
	isMarkup: boolean;
	onTitleChange: (ev: any) => void;
	onTextAreaChange: (ev: any) => void;
	onToggle: () => void;
	onSubmit: (ev: any) => void;
	onDelete?: (ev: any) => void;
}

export const BlogEdit: React.FC<BlogEditProps> = ({
	edit,
	title,
	content,
	isMarkup,
	onTextAreaChange,
	onTitleChange,
	onToggle,
	onSubmit,
	onDelete
}) => {
	return (
		<div className="blogedit row">
			<div className="blogedit-btns">
				<button onClick={onSubmit}>Submit</button>
				{edit ? <button onClick={onDelete}>Delete</button> : ''}
			</div>
			<Input value={title} id="title" label="Title" onChangeHandler={onTitleChange} type="text" />
			<ToggleButton onToggle={onToggle} value={isMarkup} />
			{isMarkup ? (
				<TextArea value={content} onChangeHandler={onTextAreaChange} />
			) : (
				<div className="article">
					<ReactMarkDown source={content} />
				</div>
			)}
		</div>
	);
};

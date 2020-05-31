import React from 'react';
import ReactMarkDown from 'react-markdown';
import './blogArticle.css';

interface BlogArticleProps {
	markDown: string;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({ markDown }) => {
	return (
		<div className="article">
			<ReactMarkDown escapeHtml={true} source={markDown} />
		</div>
	);
};

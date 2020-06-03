import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUsers, faBlog } from '@fortawesome/free-solid-svg-icons';
import './admin.css';

interface AdminProps {}

export const Admin: React.FC<AdminProps> = ({}) => {
	return (
		<div className="admin flex row">
			<Link to="admin/user" className="col-3 admin-card">
				<h1>
					<FontAwesomeIcon icon={faUsers} />
				</h1>
				<h2>User</h2>
			</Link>
			<Link to="admin/blog" className="col-3 admin-card">
				<h1>
					<FontAwesomeIcon icon={faBlog} />
				</h1>
				<h2>Blogs</h2>
			</Link>
			<Link to="admin/todo" className="col-3 admin-card">
				<h1>
					<FontAwesomeIcon icon={faCheck} />
				</h1>
				<h2>Todo</h2>
			</Link>
		</div>
	);
};

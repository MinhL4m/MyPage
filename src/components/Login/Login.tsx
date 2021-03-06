import React from 'react';
import './login.css';
import { Input } from '../common/input/Input';

interface LoginProps {
	emailOnChange: (ev: any) => void;
	passwordOnChange: (ev: any) => void;
	logIn: (ev: any) => void;
	error: string;
	email: string;
	password: string;
}

const Login: React.FC<LoginProps> = ({ email, password, emailOnChange, passwordOnChange, logIn, error }) => {
	return (
		<div className="login">
			<h2>Login</h2>
			<form className="login-form">
				<Input value={email} id="email" label="Email" onChangeHandler={emailOnChange} type="text" key="email" />
				<Input
					value={password}
					id="password"
					label="Password"
					onChangeHandler={passwordOnChange}
					type="password"
					key="password"
				/>
				<p className="login-error">{error ? error : String.fromCharCode(8201)}</p>
				<button type="submit" className="login-btn" onClick={logIn}>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Login;

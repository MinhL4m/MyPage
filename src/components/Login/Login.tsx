import React from 'react';
import './login.css';

interface LoginProps {
	emailOnChange: (ev: any) => void;
	passwordOnChange: (ev: any) => void;
	signIn: (ev: any) => void;
	error: string;
}

function onInputFocus(ev: any) {
	let targetParentClass = ev.target.parentNode.classList;
	targetParentClass.add('input--filled');
}

function onInputBlur(ev: any) {
	if (ev.target.value.trim() === '') {
		let targetParentClass = ev.target.parentNode.classList;
		targetParentClass.remove('input--filled');
	}
}

export const Login: React.FC<LoginProps> = ({ emailOnChange, passwordOnChange, signIn, error }) => {
	React.useEffect(() => {
		[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl: HTMLElement) {
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});

		return () => {
			[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl: HTMLElement) {
				inputEl.removeEventListener('focus', onInputFocus);
				inputEl.removeEventListener('blur', onInputBlur);
			});
		};
	}, []);

	return (
		<div className="login">
			<h2>Login</h2>
			<form className="login-form">
				<span className="input input--nao">
					<input
						className="input__field input__field--nao"
						type="text"
						id="username"
						onChange={emailOnChange}
					/>
					<label className="input__label input__label--nao" htmlFor="username">
						<span className="input__label-content input__label-content--nao">Email</span>
					</label>
					<svg
						className="graphic graphic--nao"
						width="300%"
						height="100%"
						viewBox="0 0 1200 60"
						preserveAspectRatio="none"
					>
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
					</svg>
				</span>
				<span className="input input--nao">
					<input
						className="input__field input__field--nao"
						type="password"
						id="password"
						onChange={passwordOnChange}
					/>
					<label className="input__label input__label--nao" htmlFor="password">
						<span className="input__label-content input__label-content--nao">Password</span>
					</label>
					<svg
						className="graphic graphic--nao"
						width="300%"
						height="100%"
						viewBox="0 0 1200 60"
						preserveAspectRatio="none"
					>
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
					</svg>
				</span>
				<p className="login-error">{error ? error : String.fromCharCode(173)}</p>
				<button type="submit" className="login-btn" onClick={signIn}>
					Sign In
				</button>
			</form>
		</div>
	);
};

import React from 'react';
import Login from './Login';
import { withRouter } from 'react-router-dom';
import { authRef } from '../../firebase/firebase';
import { connect } from 'react-redux';

/*--PropsType-- */
interface LoginComponentProps {
	dispatchLogIn: () => void;
	history: any;
}

/*--Dispatch to Props for redux-- */
function mapDispatchToProps(dispatch: any) {
	return {
		dispatchLogIn: () => dispatch({ type: 'LOGIN' })
	};
}

const LoginComponent: React.FC<LoginComponentProps> = ({ dispatchLogIn, history }) => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ error, setError ] = React.useState('');

	// React.useEffect(() => {
	// 	console.log(email)
	// });

	/**
     * function for signin admin view
     * @param ev event
     */
	const logIn = (ev: any) => {
		ev.preventDefault();
		authRef
			.signInWithEmailAndPassword( email,  password)
			.then(() => {
		        dispatchLogIn()
		        history.push('/admin');
			})
			.catch((error)=> {setError(error.message)});
	};

	return (
		<>
		<Login
			emailOnChange={(ev) => setEmail(ev.target.value)}
			passwordOnChange={(ev) => {
				setPassword(ev.target.value);
			}}
			logIn={logIn}
			error={error}
			key="login"
		/>
		</>
	);
};

export default connect(null, mapDispatchToProps)(withRouter(LoginComponent));

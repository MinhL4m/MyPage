import React from 'react';
import Login  from './Login';
import { withRouter } from 'react-router-dom';
import { authRef } from '../../firebase/firebase';
import { connect } from 'react-redux';

/*--PropsType-- */
interface LoginComponentProps {
	dispatchSignIn: () => void;
    history: any;
    isAuth: any
}

/*--Dispatch to Props for redux-- */
function mapDispatchToProps(dispatch: any) {
	return {
		dispatchSignIn: () => dispatch({ type: 'LOGIN' })
	};
}

function testing(state:any){
    return{
        isAuth: state
    }
}


const LoginComponent: React.FC<LoginComponentProps> = ({ dispatchSignIn, history, isAuth }) => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ error, setError ] = React.useState('');

    console.log(isAuth)
    /**
     * function for signin admin view
     * @param ev event
     */
	const logIn = (ev: any) => {
		ev.preventDefault();

		authRef
			.signInWithEmailAndPassword(email, password)
			.then(() => {
                dispatchSignIn()
                history.push('/dashboard');
			})
        	.catch((error)=> {setError(error.message);console.log(error)});
        // authRef.signOut()
	};

	return (
		<Login
			emailOnChange={(ev) => setEmail(ev.target.value)}
			passwordOnChange={(ev) => setPassword(ev.target.value)}
			logIn={logIn}
            error={error}
            key="login"
		/>
	);
};

export default connect(testing, mapDispatchToProps)(withRouter(LoginComponent));

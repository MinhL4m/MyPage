import React from 'react';
import { Login } from './Login';
import {authRef} from '../../firebase/firebase'

interface LoginComponentProps {}

export const LoginComponent: React.FC<LoginComponentProps> = ({}) => {
	const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [error, setError] = React.useState('');
    
    const signIn = (ev: any) => {
        ev.preventDefault();
        //TODO implment auth with redux
    }

	return (
		<Login
			emailOnChange={(ev) => setEmail(ev.target.value)}
            passwordOnChange={(ev) => setPassword(ev.target.value)}
            signIn={signIn}
            error={error}
		/>
	);
};

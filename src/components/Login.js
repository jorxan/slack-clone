import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../Reducer';
import Logo from '../images/Group 5.png'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                }) 

                

            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
                <h1>Sign in to Jordan's Slack clone</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

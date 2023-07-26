import React, {useRef, useState} from 'react';
import TextInput from "./components/input/TextInput";
import NewButton from "./components/button/NewButton";
import {Alert, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userSetAction} from "./store/UserReducer";
import gql from "graphql-tag";
import {useMutation} from "urql";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginError, setLoginError] = useState(false);

    const QUERY =gql`
       mutation TokenAuth($username: String!, $password: String!){
            tokenAuth(username:$username,password:$password){
                token
                refreshToken
                payload
                refreshExpiresIn
            }
        }
    `
    const [result,processLogin] = useMutation(QUERY);

    const userLogin = async (username,password) => {
        // const tokenPair = getLocalTokens()
        const variables ={username,password}
        processLogin(variables).then(result =>{
            if (!result.error){
                const tokenData = result.data.tokenAuth
                console.log(tokenData)
                dispatch(userSetAction({
                    username,
                    password,
                    ...tokenData,
                }))
                return true
            } else {
                console.error('auth error')
                return false
            }

        })

    }

    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    return (
        <Form className={"mt-3"} data-testid='loginForm'>
            {
                loginError && !result.fetching && (
                <Alert
                    variant='danger'
                    onClose={() => setLoginError(false)}
                    dismissible
                >Введенные данные не верны</Alert>
                )
            }
            <TextInput
                label={"Login:"}
                id='login_field'
                data-testid='login'
                className = {loginError && !result.fetching?'is-invalid':''}
                type={'text'}
                _ref={loginInputRef}
                autoComplete="username"
            />
            <TextInput
                label={"Password:"}
                id='password_field'
                data-testid='password'
                className = {loginError && !result.fetching?'is-invalid':''}
                type={'password'}
                _ref={passwordInputRef}
                autoComplete="current-password"
            />
            <NewButton
                variant="primary"
                classes={"mt-3"}
                data-testid='login_btn'
                type="submit"
                onClick={e=>{
                    e.preventDefault()
                    userLogin(loginInputRef.current.value,passwordInputRef.current.value).then(isLogin => {
                        if (!isLogin) {setLoginError(true)}
                    })

                }}
                disabled={result.fetching?'disabled':''}
            > {result.fetching ?<Spinner
                className='mx-2'
                as="span"
                animation="border"
                size="sm"
                aria-hidden="true"
            />:''}
                {result.fetching?'Loading...':'Login'}</NewButton>
        </Form>
    );
};

export default LoginForm;
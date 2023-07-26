import React, {useRef, useState} from 'react';
import TextInput from "./components/input/TextInput";
import NewButton from "./components/button/NewButton";
import {Alert, Button, FloatingLabel, Form, InputGroup, Spinner} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useMutation} from "urql";
import {LoginQUERY} from "./backend_helpers/queries";
import {processUserLogin} from "./backend_helpers/requests";
import {  faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Loading from "./components/spinner/Loading";
import ErrorAlert from "./components/Alert/ErrorAlert";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginError, setLoginError] = useState(false);


    const [result,processLogin] = useMutation(LoginQUERY);
    const loginInputRef = useRef();
    const passwordInputRef = useRef();

    const submitAction = (e) => {
        e.preventDefault()
        processUserLogin(
            loginInputRef.current.value,
            passwordInputRef.current.value,
            processLogin,
            dispatch
        ).then(isLogin => {
            if (!isLogin) {setLoginError(true)}
        })

    }

    return (
        <Form className={"mt-3"} data-testid='loginForm'>
            {
                loginError && !result.fetching && (
                <ErrorAlert
                    onclose={() => setLoginError(false)}
                >Введенные данные не верны</ErrorAlert>
                )
            }
            <TextInput
                   id="login_field"
                   label="Login"
                   data-testid='login'
                   icon={faUser}
                   className = {loginError && !result.fetching?'is-invalid':''}
                   _ref = {loginInputRef}
                   autoComplete='username'
            />
            <TextInput
                id="password_field"
                label="Password"
                data-testid='password'
                icon={faLock}
                className = {loginError && !result.fetching?'is-invalid':''}
                _ref = {passwordInputRef}
                autoComplete='password'
                is_password={true}
            />
            <NewButton
                variant="primary"
                classes={"mt-3"}
                data-testid='login_btn'
                type="submit"
                onClick={submitAction}
                disabled={result.fetching?'disabled':''}
            > {result.fetching ?<Loading />:''}
                {result.fetching?'Loading...':'Login'}</NewButton>
        </Form>
    );
};

export default LoginForm;
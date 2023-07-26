import React, {useRef, useState} from 'react';
import TextInput from "./components/input/TextInput";
import NewButton from "./components/button/NewButton";
import {Alert, Button, FloatingLabel, Form, InputGroup, Spinner} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useMutation} from "urql";
import {LoginQUERY} from "./backend_helpers/queries";
import {processUserLogin} from "./backend_helpers/requests";
import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginError, setLoginError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [result,processLogin] = useMutation(LoginQUERY);
    const loginInputRef = useRef();
    const passwordInputRef = useRef();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
            <InputGroup className="mb-3">
                <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                <FloatingLabel label='Login'>
                    <TextInput
                        placeholder = 'Login'
                        // label={"Login:"}
                        id='login_field'
                        data-testid='login'
                        className = {loginError && !result.fetching?'is-invalid':''}
                        type={'text'}
                        _ref={loginInputRef}
                        autoComplete="username"
                    />
                </FloatingLabel>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                <FloatingLabel label='Password'>
                    <TextInput
                        placeholder='Password'
                        id='password_field'
                        data-testid='password'
                        className = {loginError && !result.fetching?'is-invalid':''}
                        type={showPassword ? 'text' : 'password'}
                        _ref={passwordInputRef}
                        autoComplete="current-password"
                    />
                </FloatingLabel>
                <Button
                    variant="secondary"
                    onClick={togglePasswordVisibility}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
            </InputGroup>
            <NewButton
                variant="primary"
                classes={"mt-3"}
                data-testid='login_btn'
                type="submit"
                onClick={e=>{
                    e.preventDefault()
                    processUserLogin(
                        loginInputRef.current.value,
                        passwordInputRef.current.value,
                        processLogin,
                        dispatch
                    ).then(isLogin => {
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
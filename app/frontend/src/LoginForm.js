import React, {useRef} from 'react';
import TextInput from "./components/input/TextInput";
import NewButton from "./components/button/NewButton";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userSetAction} from "./store/UserReducer";
import {getUser} from "./store/selectors/getUser";

const LoginForm = () => {
    const dispatch = useDispatch()
    const user = useSelector(getUser);

    const userLogin = (username,password) => {
        dispatch(userSetAction({username:username,password:password}))
    }

    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    return (
        <Form className={"mt-3"}>
            <TextInput
                label={"Login:"}
                id='login_field'
                type={'text'}
                _ref={loginInputRef}
                autoComplete="username"
            />
            <TextInput
                label={"Password:"}
                id='password_field'
                type={'password'}
                _ref={passwordInputRef}
                autoComplete="current-password"
            />
            <NewButton
                variant="primary"
                classes={"mt-3"}
                onClick={e=>{
                    e.preventDefault()
                    userLogin(loginInputRef.current.value,passwordInputRef.current.value)
                    //     login:loginInputRef.current.value,
                    //     password:passwordInputRef.current.value
                    // })
                }}
            >Login</NewButton>
        </Form>
    );
};

export default LoginForm;
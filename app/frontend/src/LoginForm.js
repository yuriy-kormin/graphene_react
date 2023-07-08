import React, {useRef} from 'react';
import TextInput from "./components/input/TextInput";
import NewButton from "./components/button/NewButton";
import {Form} from "react-bootstrap";

const LoginForm = ({user,setUser}) => {
    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    return (
        <Form className={"mt-3"}>
            <TextInput label={"Login:"} id='login_field' type={'text'} _ref={loginInputRef}></TextInput>
            <TextInput label={"Password:"} id='password_field' type={'password'} _ref={passwordInputRef}></TextInput>
            <NewButton
                variant="primary"
                classes={"mt-3"}
                onClick={e=>{
                    e.preventDefault()
                    setUser({
                        is_login: true,
                        login:loginInputRef.current.value,
                        password:passwordInputRef.current.value
                    })
                    console.log("User", user)
                }}
            >Login</NewButton>
        </Form>
    );
};

export default LoginForm;
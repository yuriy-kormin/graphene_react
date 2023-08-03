import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from "./LoginForm";
import UserList from "./userList";
import NavBar from "./NavBar";
import {getUser} from "./store/selectors/getUser";
import {useSelector} from "react-redux";
import {Provider} from 'urql';
import {useURQLClient} from "./hooks/useURQLClient";

function App({urqlClient=undefined}) {
    const user = useSelector(getUser);
    const client = useURQLClient()
    return (
        <Provider value={urqlClient || client}>
            <div className="App">
                <NavBar/>
                <Container>
                    {user.is_login
                        ? (<UserList/>)
                        : (<LoginForm></LoginForm>)
                    }
                </Container>
            </div>
        </Provider>
    );
}

export default App;

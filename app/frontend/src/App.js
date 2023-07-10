import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from "./LoginForm";
import { authExchange } from '@urql/exchange-auth';
import {Client, cacheExchange, fetchExchange, Provider} from 'urql';
import UserList from "./userList";
import NavBar from "./NavBar";


function App() {
    const [user, setUser] = useState({is_login:false})


    async function initializeAuthState() {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        return { token, refreshToken };
    }
    const [tokens, setTokens] = useState(initializeAuthState);

    const client = new Client({
        url: 'http://localhost:8000/graphql/',
        exchanges: [
            cacheExchange,
            authExchange(async utils => {
                let { token, refreshToken } = initializeAuthState();
                console.log('token', token,'refresh',refreshToken);
                // return {
                //
                // };
            }),
            fetchExchange,
        ],
    });
  return (
      <Provider value={client}>
    <div className="App">
        <NavBar user={user}/>
        <Container>
            {user.is_login
                ? (<UserList />)
                :(<LoginForm user={user} setUser={setUser}></LoginForm>)
            }
        </Container>
    </div>
      </Provider>
  );
}

export default App;

import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from "./LoginForm";
// import { authExchange } from '@urql/exchange-auth';
// import {Client, cacheExchange, fetchExchange, Provider} from 'urql';
import UserList from "./userList";
import NavBar from "./NavBar";
// import gql from "graphql-tag";
// import async from "async";
// import {useSelector} from "react-redux";
import {getUser} from "./store/selectors/getUser";
import {useSelector} from "react-redux";

function App() {
    // const dispatch =useDispatch()
    const user = useSelector(getUser);
    async function getLocalTokens() {
        // const token = localStorage.getItem('token');
        // const refreshToken = localStorage.getItem('refreshToken');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvcmsiLCJleHAiOjE2ODg5OTE2NTQsIm9yaWdJYXQiOjE2ODg5OTEzNTR9.fvISyfGs1Kc3i6yvkLH9ZTd9wpn9qsXUn4MmxFpKtmw"
        const refreshToken = "3f3fdde8bd9c4f81eb03dc3589d9234ff55fad6d"
        return { token, refreshToken };
    }

    // async function refreshAuthState() {
    //     const {token, refreshToken} = getLocalTokens();
    //     const GetNewTokenQUERY=gql`
    //         mutation TokenAuth($username: String!, $password: String!){
    //             tokenAuth(username:$username,password:$password){
    //                 token
    //                 refreshToken
    //                 payload
    //             }
    //         }`
    //
    // }


    // const client = new Client({
    //     url: 'http://localhost:8000/graphql/',
    //     exchanges: [
    //         cacheExchange,
    //         authExchange({
    //             getAuth: async ({authState}) =>{
    //                 authState = await getLocalTokens()
    //                 return null;
    //             },
    //         }),
    //         fetchExchange,
    //     ],
    // });
  return (
    <div className="App">
        <NavBar />
        <Container>
            {user.is_login
                ? (<UserList />)
                :(<LoginForm></LoginForm>)
            }
        </Container>
    </div>
  );
}

export default App;

import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from "./LoginForm";
import UserList from "./userList";
import NavBar from "./NavBar";
import {getUser} from "./store/selectors/getUser";
import {useDispatch, useSelector} from "react-redux";
import {Client, Provider, cacheExchange, fetchExchange, dedupExchange, makeOperation} from 'urql';
import {devtoolsExchange} from "@urql/devtools";
import {authExchange} from "@urql/exchange-auth";
import {userSetAction} from "./store/UserReducer";
import {getTokensFromStorage} from "./store/tokenStore";



function App({urqlClient=undefined}) {
    const dispatch = useDispatch()
    const user = useSelector(getUser);
    const value = urqlClient || new Client({
            url: 'http://localhost:8000/graphql/',
            exchanges: [
                devtoolsExchange,
                dedupExchange,
                cacheExchange,
                authExchange(async utils => {
                    // getAuth: async(user) =>{
                    console.log('begin getAuth');
                    if (!user.is_login) {
                        const tokens = await getTokensFromStorage();
                        if (tokens) {
                            console.log('tokens found');
                            dispatch(userSetAction(tokens))
                            return tokens;
                        }
                        console.log('token not found');
                        return null;
                    }
                    return {
                        addAuthToOperation: operation => {
                            console.log('begin addAuthToOperation');
                            if (user.is_login){
                                console.log('set token to headers')
                                return utils.appendHeaders(operation,{
                                    Authorization: `Bearer ${user.token}`,
                                })
                            }
                            return operation
                            // makeOperation(operation.kind, operation, {
                            //     ...operation.context,
                            //     someAuthThing: user.token,
                            // });
                            // return operation

                        },
                        willAuthError: () => {
                            console.log('begin willAuthError');
                            const expirationTime = new Date(user.tokenExpiresIn * 1000);
                            const currentTime = new Date();
                            if (currentTime < expirationTime){
                                console.log('token still valid');
                                return false;
                            }
                            console.log('token was expired ')
                            return true;
                        },
                        didAuthError: () => {
                            console.log('begin didAuthError');

                        },
                        refreshAuth: () => {
                            console.log('begin refreshAuth');

                        }
                    }
                    // },
                    //         if (!authState || !authState.token) {
                    //             console.log('no authState or no authState.token');
                    //             return operation;
                    //         }
                    //
                    //         console.log('token or authState found');
                    //
                    //         const fetchOptions =
                    //             typeof operation.context.fetchOptions === 'function'
                    //                 ? operation.context.fetchOptions()
                    //                 : operation.context.fetchOptions || {};
                    //
                    //         return makeOperation(operation.kind, operation, {
                    //             ...operation.context,
                    //             fetchOptions: {
                    //                 ...fetchOptions,
                    //                 headers: {
                    //                     ...fetchOptions.headers,
                    //                     Authorization: `Bearer ${authState.token}`,
                    //                 },
                    //                 credentials: 'include',
                    //             },
                    //         });
                    //     },
                }),
                fetchExchange,
            ],
        })
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
      <Provider value={value}>
      <div className="App">
        <NavBar />
        <Container>
            {user.is_login
                ? (<UserList />)
                :(<LoginForm></LoginForm>)
            }
        </Container>
    </div>
      </Provider>
  );
}

export default App;

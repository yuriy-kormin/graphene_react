import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";
import {delay, fromValue, never, pipe} from 'wonka';
import {act} from "react-dom/test-utils";



describe('App root testing',()=>{
    test('default state is display login form',()=>{
        render (<Provider store={store}><App /></Provider>);
        expect(screen.getByTestId('loginForm')).toBeInTheDocument();
    })

    it ('login to site', async ()=>{

        const data = {
            "data": {
                "tokenAuth": {
                    "token": "test_token",
                    "refreshToken": "refresh_token",
                    "payload": {
                        "username": "test_login",
                        "exp": 1690364235,
                        "origIat": 1690363935
                    },
                    "refreshExpiresIn": 1690968735
                }
            }
        };
        const mockClient = {
            executeMutation:  jest.fn(query => pipe(fromValue(data), delay(100))),
            executeQuery: jest.fn(() => never),        }
        render (
            <Provider store={store}>
                <App urqlClient={mockClient} />
            </Provider>);

        userEvent.type(screen.getByTestId('login'),'test_login');
        userEvent.type(screen.getByTestId('password'),'test_pass');
        act(()=>{
            userEvent.click(screen.getByTestId('login_btn'));
        })
        //
        await waitFor(() => {
        expect(mockClient.executeMutation).toBeCalledTimes(1);
        expect(screen.queryByTestId('loginForm')).not.toBeInTheDocument();
        })


    })
})
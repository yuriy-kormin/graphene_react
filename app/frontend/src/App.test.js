import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";

describe('App root testing',()=>{
    test('default state is display login form',()=>{
        render (<Provider store={store}><App /></Provider>);
        expect(screen.getByTestId('loginForm')).toBeInTheDocument();
    })

    test ('login to site', async ()=>{
        render (<Provider store={store}><App /></Provider>);

        userEvent.type(screen.getByTestId('login'),'test_login');
        userEvent.type(screen.getByTestId('password'),'test_pass');
        userEvent.click(screen.getByTestId('login_btn'));

        await waitFor(() => {
            expect(screen.queryByTestId('loginForm')).not.toBeInTheDocument();
        })


    })
})
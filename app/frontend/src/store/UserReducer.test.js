import {logoutAction, parseAuthResult, userReducer, userSetAction} from "./UserReducer";

describe('user reducer testing',()=>{
    const user = {
        "token": "test_token",
        "refreshToken": "refresh_token",
        "payload": {
            "username": "test_login",
            "exp": 1690364235,
            "origIat": 1690363935
        },
        "refreshExpiresIn": 1690968735
    }

    test('logged out from null state',()=>{
        expect(userReducer(null, logoutAction())).toEqual({is_login:false});
    })

    test('logged in from null state',()=>{

        expect(userReducer(null, userSetAction(user))).toEqual({...parseAuthResult(user), is_login:true});
    })

    test('logged out from logged state',()=>{
        expect(userReducer({...user,is_login: true}, logoutAction())).toEqual({is_login:false});
    })

})
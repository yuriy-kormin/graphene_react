import {logoutAction, userReducer, userSetAction} from "./UserReducer";

describe('user reducer testing',()=>{
    const user = {username:'Kevin',password:'kevinpass'}

    test('logged out from null state',()=>{
        expect(userReducer(null, logoutAction())).toEqual({is_login:false});
    })

    test('logged in from null state',()=>{

        expect(userReducer(null, userSetAction(user))).toEqual({...user, is_login:true});
    })

    test('logged out from logged state',()=>{
        expect(userReducer({...user,is_login: true}, logoutAction())).toEqual({is_login:false});
    })

})
import {getUser} from "./getUser";

describe('getUser',()=>{
    test('get user with empty state',()=>{
        expect(getUser({})).toEqual({})
    })

    test('get user with text state',()=>{
        expect(getUser({user:'testUser'})).toBe('testUser');
    })

    test('get user with correct state',()=>{
        const testuser={username:'test_username',password:'test_pass'}
        expect(getUser({user: testuser})).toEqual(testuser);
    })
})
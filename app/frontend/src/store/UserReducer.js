import {removeTokensFromStorage, setTokensToStorage} from "./tokenStore";

const setUser = "SET_USER"
const logout = "LOGOUT"

export const parseAuthResult = (authData) => {
    return {
        token: authData?.token,
        refreshToken: authData?.refreshToken,
        refreshExpiresIn: authData?.refreshExpiresIn,
        username: authData?.payload?.username,
        tokenExpiresIn:authData?.payload?.exp
    }
}

export const userReducer = (state={is_login:false}, action) => {
    switch (action.type){
        case setUser:
            const json = parseAuthResult(action.payload)
            if (json){
                setTokensToStorage(action.payload);
                return {...state, is_login:true, ...json}
            }
            break;
        case logout:
            removeTokensFromStorage()
            return {is_login:false};
            break;
        default:
            return state
    }
}

export const userSetAction= (payload) => ({type:setUser, payload:payload})
export const logoutAction= ()=>({type: logout})
import {userSetAction} from "../store/UserReducer";


export const processUserLogin = async (username, password,func_process,dispatch) => {

    const result = await func_process({username,password})
    if (!result.error) {
        const tokenData = result.data.tokenAuth
        dispatch(userSetAction({
            username,
            password,
            ...tokenData,
        }))
        return {result: true}
    }
    return {result: false, info:result.error}
}
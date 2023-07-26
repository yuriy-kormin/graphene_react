import {userSetAction} from "../store/UserReducer";


export const processUserLogin = async (username, password,func_process,dispatch) => {
    const variables ={username,password}
    func_process(variables).then(result =>{
        console.log(result)
        if (!result.error){
            const tokenData = result.data.tokenAuth
            dispatch(userSetAction({
                username,
                password,
                ...tokenData,
            }))
            return true
        } else {
            console.error('auth error')
            return false
        }

    })

}
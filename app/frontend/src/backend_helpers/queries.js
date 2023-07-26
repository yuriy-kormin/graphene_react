import gql from "graphql-tag";

export const LoginQUERY =gql`
       mutation TokenAuth($username: String!, $password: String!){
            tokenAuth(username:$username,password:$password){
                token
                refreshToken
                payload
                refreshExpiresIn
            }
        }
    `
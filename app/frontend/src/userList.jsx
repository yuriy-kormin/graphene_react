import React from 'react';
import {useQuery} from 'urql'
import gql from 'graphql-tag'



const UserList = () => {
    const QUERY =gql`
        query {
          userListing{
            id
            username
          }
        }
    `
    const [result] = useQuery({ query: QUERY });
    const { data, fetching, error } = result

    console.log(result)

    if (fetching) return <div>Fetching</div>
    if (error) return <div>Error{error.message}</div>

    return (
        <div>
            {data.userListing.map(user => {
            return <div key={user.id}> {user.username}</div>
        })}
        </div>
    );
};

export default UserList;
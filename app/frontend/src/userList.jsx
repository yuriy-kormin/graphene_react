import React from 'react';
import {useQuery} from 'urql'
import {UserListQUERY} from "./backend_helpers/queries";



const UserList = () => {

    const [{ data, fetching, error }] = useQuery({query: UserListQUERY});
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
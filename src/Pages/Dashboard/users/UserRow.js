import React from 'react';

const UserRow = ({user}) => {
    const { email}=user;
    return (

        <tr>
            <th>{}</th>
            <td>{email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>

    );
};

export default UserRow;
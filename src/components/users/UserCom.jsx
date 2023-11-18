import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function UserCom() {
    const [users_ar, setUsersAr] = useState();

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        try {
            const url = "http://localhost:3001/users";
            const response = await axios.get(url);
            console.log(response.data);
            setUsersAr(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    console.log("users_ar");
    console.log(users_ar);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userName</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">phoneNumber</th>
                        <th scope="col">role</th>
                    </tr>
                </thead>
                <tbody>
                    {users_ar ? (
                        users_ar.map((user, i) => (
                            <tr key={user._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

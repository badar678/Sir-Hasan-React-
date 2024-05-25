import React, { useEffect, useState } from 'react';

function UserCard(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="container mt-4">
            <h2>{props.name} Users List</h2>
            <div className="row">
                {data.map(user => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                <p className="card-text">{user.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserCard;
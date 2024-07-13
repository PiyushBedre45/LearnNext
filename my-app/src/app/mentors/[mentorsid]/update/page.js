'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UpdateUserDetails = ({ params }) => {

    let id = params.mentorsid

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const getUserDetails = async () => {
        const response = await axios.get(`http://localhost:3000/api/${id}`)
        setName(response.data[0].name)
        setAge(response.data[0].age)
        setEmail(response.data[0].email)

    }

    const changeUserDetail = async () => {
        try {
            const result = await axios.put(`http://localhost:3000/api/${id}`, {
                name,
                age,
                email
            });
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    // const changeUserDetail = async () => {
    //     let result = await fetch(`http://localhost:3000/api/${id}`, {
    //         method: "PUT",
    //         body: JSON.stringify({ name, age, email })
    //     });
    //     result = await result.json()
    //     console.log(result)
    // }



    useEffect(() => {
        getUserDetails()
    }, [])


    return (
        <div>
            <h1>update the mentors</h1>

            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <button onClick={changeUserDetail}>Update</button>
        </div>
    )
}

export default UpdateUserDetails;

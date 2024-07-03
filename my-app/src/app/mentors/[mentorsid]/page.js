'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MentorDetails = ({ params }) => {
    const [user, setUser] = useState(null);
    const getDetails = async () => {
        const response = await axios.get(`http://localhost:3000/api/${params.mentorsid}`)
        console.log(response.data[0].name)
        setUser(response.data[0])
        console.log('hi user name', user)

    }
    useEffect(() => {
        getDetails()
    }, [params.mentorsid])
    return (
        <div>
            haskjdhfkja
            {/* <h1>{user ? user.name : "loading"}</h1> */}
            <h1>{user?.name}</h1>
        </div>
    )
}

export default MentorDetails

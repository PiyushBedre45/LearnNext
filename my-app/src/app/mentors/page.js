'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Mentors = () => {
    const [mentors, setMentors] = useState([])
    const getMentors = async () => {
        let response = await axios.get(`http://localhost:3000/api`)
        setMentors(response.data)

    }
    useEffect(() => {
        getMentors()
    }, [])
    return (
        <>
            <h1>All Mentors</h1>
            {
                mentors.map((mens, index) => (

                    <div key={mens.id}>
                        <Link href={`/mentors/${mens.id}`}><h1 >{mens.name}</h1></Link>

                    </div>

                ))
            }
        </>
    )
}

export default Mentors

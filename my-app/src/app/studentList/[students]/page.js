'use client'
import React from 'react'

const Students = ({ params }) => {
    console.log(params)
    return (
        <>
            <h1>student details</h1>
            <h1>Name:{params.students}</h1>
        </>
    )
}

export default Students

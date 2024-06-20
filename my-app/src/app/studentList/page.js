'use client'
import Link from 'next/link'
import React from 'react'

const StudentList = () => {
    const stud = [
        {
            name: 'piyush',
        },

        {
            name: 'yash',
        },

        {
            name: 'panda',
        },

        {
            name: 'adi',
        }
    ]
    return (
        <>
            <h1 className='text-3xl'> Dynamic Routing</h1>
            <h1>student list</h1>
            <div className='w-full h-[100vh] flex items-center justify-center'>
                <ul className='text-2xl flex flex-col gap-2'>
                    {
                        stud.map((s, index) => (

                            <div key={s.name}>
                                <Link href={`/studentList/${s.name}`}><li >{s.name}</li></Link>
                            </div>

                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default StudentList

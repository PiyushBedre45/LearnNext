'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const About = () => {
    const router = useRouter();
    const navigate = (routerName) => {
        router.push(routerName)
    }
    return (
        <>
            <h1>hi from About</h1>

            {/* <Link href={'/login'}><button>go to login page</button></Link> */}
            <button onClick={() => navigate('/login')}>go to login page</button>
        </>
    )
}

export default About

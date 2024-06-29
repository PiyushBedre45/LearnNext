import Link from 'next/link'
import React from 'react'

const Login = () => {
    console.log('hij')
    console.log(process.env.PASS)
    return (
        <>
            <h1> hi from Login</h1>
            <Link href={'/about'}><button>go to about page</button></Link>
        </>
    )
}

export default Login

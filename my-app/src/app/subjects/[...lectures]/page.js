import React from 'react'

const Lecture = ({ params }) => {
    console.log(params)
    return (
        <>
            <h1>Day : {params.lectures[0]}</h1>
            <h1>lectures : {params.lectures[1]}</h1>

        </>
    )
}

export default Lecture

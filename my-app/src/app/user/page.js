import React from 'react'

const Page = () => {
    return (
        <div>
            hi ji
        </div>
    )
}

export default Page

export function generateMetadata({ params }) {
    return {
        title: "user page",
        description: "user page"
    };
}
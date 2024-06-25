'use client'
import React from 'react'

const PriceBtn = ({ price }) => {
    return (
        <>
            <button className='border border-black' onClick={() => alert(price)}>Check Price</button>
        </>
    )
}

export default PriceBtn

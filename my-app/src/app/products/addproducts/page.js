'use client'
import axios from 'axios'
import React, { useState } from 'react'

const AddProducts = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')

    const addProduct = async () => {
        console.log(name, description, price, rating);
        try {
            let result = await axios.post(`http://localhost:3000/api/items`, {
                name, description, price, rating
            })
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Add Products</h1>
            <input type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Product Name' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder='Enter Product Name' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder='Enter Product Name' value={rating} onChange={(e) => setRating(e.target.value)} />

            <button onClick={addProduct}>Add Items</button>
        </div>
    )
}

export default AddProducts

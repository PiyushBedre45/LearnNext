'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [items, setItems] = useState([]);
    const getAllProducts = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response.data.products)
        setItems(response.data.products)
    }
    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <>
            <h1>All Products</h1>
            <div>
                {
                    items.map((item) => (
                        <h1>{item.title}</h1>
                    ))
                }
            </div>
        </>
    )
}

export default Products

//  CLIENT SIDE  API FETCHING

// 'use client'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Products = () => {
//     const [items, setItems] = useState([]);
//     const getAllProducts = async () => {
//         const response = await axios.get('https://dummyjson.com/products')
//         console.log(response.data.products)
//         setItems(response.data.products)
//     }
//     useEffect(() => {
//         getAllProducts();
//     }, [])
//     return (
//         <>
//             <h1>All Products</h1>
//             <div>
//                 {
//                     items.map((item) => (
//                         <h1>{item.title}</h1>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default Products

//  SERVER SIDE  API FETCHING

import axios from 'axios';
import React from 'react'

const getData = async () => {
    let response = await axios.get('https://dummyjson.com/products')
    return response.data.products
}

const Products = async () => {
    let products = await getData()
    console.log(products)
    return (
        <div>
            {
                products.map((item) => (
                    <h1>{item.title}</h1>
                ))
            }
        </div>
    )
}

export default Products;

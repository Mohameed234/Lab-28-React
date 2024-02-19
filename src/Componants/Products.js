import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Product.css"
import { Link } from 'react-router-dom';

function Product() {

    const [product,setproduct] = useState();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((pro)=>{
            setproduct(pro.data)
        })
        .catch((err)=>{console.log(err)})
    },[])
        
    
    
    
    return (
        <div className='container'>
            {

                product?.map((item) => {
                    return(

                        <div className='card'>
                            <img src={item.image} alt=''/>
                            <h3> {item.title}</h3>
                            <p> Price: {item.price} $</p>
                            <Link to={`/products/${item.id}`}>Read More</Link>
                        
                        </div>
                        )
                })
         
            }
       
        
    </div>
  )
}

export default Product
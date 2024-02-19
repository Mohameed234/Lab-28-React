import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Singleproduct.css"

const Singleproduct = () => {

    const params = useParams()
    const [products, setproduct] = useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/' + params.id)
        .then(r=>setproduct(r.data))
        .catch(err=>console.log(err))
    },[])



  return (

    <div className='product'>
        <img src={products?.image} alt=''/>
        <h1> <span>Title: </span>
            {products?.title}
        </h1>
        <p> <span>Description: </span>
            {products?.description}
        </p>
        <p>
           <span>Price: </span>  {products?.price} $
        </p>

    </div>
  )
}

export default Singleproduct
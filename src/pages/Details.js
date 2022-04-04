import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackArrow from '../assets/BackArrow';
import CheckoutBag from '../assets/CheckoutBag';
import styles from "./Details.module.css"


const Details = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => res.json())
        .then((json) => setProduct(json));
    }, [params.id])
    
    const handleBack = () => {
        navigate(-1)
    }
    const handleCheckout = () => {
        navigate("/checkout")
    }

  return (
    <div>
        <div className={styles.detailsNav}>

        
        <div style={{width:"48px", float:"left"}}>
        <CheckoutBag  onClick={handleCheckout}/>
        </div>
        <h1>Details Page</h1>
        <div style={{width:"48px", float:"right"}}>
        <BackArrow onClick={handleBack}/>
        </div>
        </div>
        <div className={styles.detailsWrapper}>
            <p>{product?.id}</p>
            <p>{product?.title}</p>
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.price}</p>
            <p>{product?.rating?.rate}</p>
            <p>{product?.rating?.count}</p>
            <img
                className={styles.detailsImage}
                src={product?.image}
                alt={product?.title}
            />
        </div>
    </div>
  )
}

export default Details
import React from 'react'
import { useEffect,useState } from 'react'
import styles from "./Product.module.css"
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setProducts(json));
      }, []);
  return (
    <div>
        <h2>Product Page</h2>
        <div className={styles.products}>
            {products.map((each)=>(
                <Link to={`details/${each.id}`} key={each.id} className = {styles.product}>    {/*burası normalde div ama link verip detail sayfasına gitmesi için Link e çeviriyoruz */}
                    <h6>{ each.category}</h6>
                    <p>{each.title}</p>
                    {/* <img style={{width:"100px"}} src={each.image} alt="" /> */}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Products
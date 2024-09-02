import React, { useEffect, useState } from "react";
import Card from './card'
function Product() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data.products);
        };
        fetchdata();
    }, []);
    return <div>
        {product.map((el) => (
            <Card img={el.images[0]} text={el.title} />
        ))}
    </div>;
} 

export default Product;

// TODO fetching data using useEffect
// step1 import the useffect from react
// step2 call the useEffect  inside the component
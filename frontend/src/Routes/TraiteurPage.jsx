import React, {useState, useEffect} from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'

const TraiteurPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/traiteur`)
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
   

    }, [])
 

  return (
    <div className="flex  gap-2 justify-center items-center h-screen">
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} ingredients={product.ingredients} price={product.price} src={product.image}  />
      ))}
    </div>
  )
}

export default TraiteurPage
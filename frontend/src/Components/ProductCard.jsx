import React from 'react'

const ProductCard = (props) => {
  const formattedPrice = parseFloat(props.price).toFixed(2)
  return (
    <div className="bg-gray-300 flex items-center justify-center h-96 rounded-xl shadow-lg p-4">
        <div className="flex h-full flex-col justify-center items-center gap-4 w-48">
            <img src={props.src} alt="" className='w-40 h-40 object-cover' />
            <h2>{props.name}</h2>
            <p>{props.ingredients}</p>
            <p>{formattedPrice}€</p>
            <button className="bg-blue-500 p-1.5 rounded-xl">Add to Cart</button>
        </div>
    </div>

  )
}

export default ProductCard
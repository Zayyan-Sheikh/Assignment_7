'use client'

import { useState, useEffect } from 'react'
import Card from '../components/Card'

interface Product {
  id: number
  title: string
  image: string
  description: string
  price: number
}

export default function ClientSide() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Client-side Fetched Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
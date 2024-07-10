import React from 'react'
import ProductList from './ProductList/ProductList'
import Banner from '../../components/Banner/Banner'

const ProductPage = () => {
  return (
    <main>
        <Banner bannerNav="Our Products"/>
        <ProductList/>
    </main>
  )
}

export default ProductPage
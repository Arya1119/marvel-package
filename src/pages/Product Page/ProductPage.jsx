import React, { useEffect } from 'react'
import ProductList from './ProductList/ProductList'
import Banner from '../../components/Banner/Banner'

const ProductPage = () => {
  useEffect(() => {
    document.title = 'Products Page';
}, []);
  return (
    <>
        <Banner bannerNav="Our Products"/>
        <ProductList/>
    </>
  )
}

export default ProductPage
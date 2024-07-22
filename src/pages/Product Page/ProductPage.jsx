import React, { useEffect } from 'react';
import './ProductPage.css'; // Create this CSS file for additional styling if needed
import ProductList from './ProductList/ProductList';
import Banner from '../../components/Banner/Banner';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
  useEffect(() => {
    document.title = 'Products Page';

    // GSAP animations
    gsap.fromTo(
      '.banner',
      { opacity: 0, y: -50, scale: 1.1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.banner',
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.product-list',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-list',
          start: 'top 80%',
          once: true,
          delay: 0.3,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="banner">
        <Banner bannerNav="Our Products" />
      </div>
      <div className="product-list">
        <ProductList />
      </div>
    </>
  );
};

export default ProductPage;

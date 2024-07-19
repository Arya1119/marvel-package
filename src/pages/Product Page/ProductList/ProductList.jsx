import React from 'react'
import "./ProductList.css"
import ProductImg1 from "./../../../assets/products/Corrugated-box.jpg"
import ProductImg2 from "./../../../assets/products/Printed-duplex.png"
import ProductImg3 from "./../../../assets/products/PrintedCorrugated-box.png"
import ProductImg4 from "./../../../assets/products/Printed-duplex2.png"
import ProductImg5 from "./../../../assets/products/FoodPackagingBox.png"
import ProductImg6 from "./../../../assets/products/Corrugated-Box2.jpg"
import ProductImg7 from "./../../../assets/products/DuplexBox.jpeg"
import ProductImg8 from "./../../../assets/products/OtheIndustry.jpg"
import ProductImg9 from "./../../../assets/products/CORRELLE 3D BOX.jpg"

const ProductList = () => {

    const products = [
        {id:1,imagLink:ProductImg1,title:"Corrugated Box",color:"#D0D0D0"},
        {id:2,imagLink:ProductImg2,title:"Printed Duplex Box",color:"#ff693afc"},
        {id:3,imagLink:ProductImg3,title:"Printed Corrugated Box",color:"#D0D0D0"},
        {id:4,imagLink:ProductImg4,title:"Printed Duplex Box",color:"#cdeb95"},
        {id:5,imagLink:ProductImg5,title:"Food Packaging Box",color:"#fdec7e"},
        {id:6,imagLink:ProductImg6,title:"Duplex Box",color:"#e6e3e4"},
        {id:7,imagLink:ProductImg7,title:"Printed Duplex Box",color:"#e6e3e4"},
        {id:8,imagLink:ProductImg8,title:"Othe Industry",color:"#2987b6"},
        {id:9,imagLink:ProductImg9,title:"CORRELLE 3D BOX",color:"#545454"},
        
    ]
  return (
    <section className='products-section'>

        {
            products.map((product)=>(

                <div className='product' key={product.id}>
                    <div className='product-image' style={{borderRadius:`2px solid ${product.color}`}}>
                      <img src={product.imagLink} alt={product.title} />
                    </div>
                    <h3 style={{backgroundColor:product.color}}>{product.title}</h3>
                </div>
              
            ))
        }
    </section>
  )
}

export default ProductList
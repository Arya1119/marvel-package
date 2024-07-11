import React from 'react'
import "./ProductList.css"
import ProductImg1 from "./../../../assets/Corrugated-box.jpg"
import ProductImg2 from "./../../../assets/Printed-duplex.png"
import ProductImg3 from "./../../../assets/PrintedCorrugated-box.png"
import ProductImg4 from "./../../../assets/Printed-duplex2.png"

const ProductList = () => {

    const products = [
        {id:1,imagLink:ProductImg1,title:"Corrugated Box",color:"#D0D0D0"},
        {id:2,imagLink:ProductImg2,title:"Printed Duplex Box",color:"#ff693afc"},
        {id:3,imagLink:ProductImg3,title:"Printed Corrugated Box",color:"#D0D0D0"},
        {id:3,imagLink:ProductImg4,title:"Printed Duplex Box",color:"#cdeb95"},
      
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
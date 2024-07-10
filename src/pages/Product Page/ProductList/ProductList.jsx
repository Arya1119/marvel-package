import React from 'react'
import "./ProductList.css"

const ProductList = () => {

    const products = [
        {id:1,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/Vedik-Kapur-Design-.jpg",title:"Printed Boxes",color:"#859c44"},
        {id:2,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/N95-PRO-MONTHLY-KIT.jpg",title:"Pharma Industry",color:"#D0D0D0"},
        {id:3,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/Cheeze-Adda.jpg",title:"Food Packaging Box",color:"#CB9F70"},
        {id:4,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/VANTA-BLACK.jpg",title:"Electric Industry",color:"#D9DBDA"},
        {id:5,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/Hi-Bolt-Industries-Pvt.Ltd_.jpg",title:"Engineering Industry",color:"#CCCCCC"},
        {id:6,imagLink:"https://www.marvelpack.com/wp-content/uploads/2021/01/VINTAGE.jpg",title:"Metal Industry",color:"#C2AF97"},
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
import React from 'react';
import "./Gallery.css";
import automotiveIcon from "./../../../assets/automotive.svg"
import elecotronicsIcon from "./../../../assets/electronics.svg"
import foodIcon from "./../../../assets/food.svg"
import hardwareIcon from "./../../../assets/hardware.svg"
import HealthIcon from "./../../../assets/healthcare.svg"
import houseIcon from "./../../../assets/house.svg"
import medicalIcon from "./../../../assets/medical.svg"
import retailPackIcon from "./../../../assets/retail-package.svg"
import retailStoreIcon from "./../../../assets/Retail-Store.svg"
import schoolIcon from "./../../../assets/school-office.svg"
import sportIcon from "./../../../assets/sport.svg"
import toysIcon from "./../../../assets/toys.svg"

const GalleryItem = ({ src, caption }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-icon">
        <img src={src} alt={caption} />
      </div>
      <p className='gallery-caption'>{caption}</p>
    </div>
  );
};

const Gallery = () => {
  const galleryItems = [
    { src: automotiveIcon, caption: "Automotive" },
    { src: elecotronicsIcon, caption: "Electronics" },
    { src: foodIcon, caption: "Food" },
    { src: hardwareIcon, caption: "Hardware" },
    { src: HealthIcon, caption: "Health & Beauty" },
    { src: houseIcon, caption: "House" },
    { src: medicalIcon, caption: "Medical" },
    { src: retailPackIcon, caption: "Retail Packaging" },
    { src: retailStoreIcon, caption: "Retail Store" },
    { src: schoolIcon, caption: "School & Office" },
    { src: sportIcon, caption: "Sporting Goods" },
    { src:toysIcon, caption: "Toys & Hobby" }
  ];
  
  return (
    <section className='gallery-section'>
      <div className="gallery-container">
        <div className="gallery-header">
          <p>Industry We Serve</p>
          <div className="gallery-divider"></div>
        </div>
        <div className="gallery-itemlist">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} src={item.src} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React from "react";
import "./Unit.css";
import PDIcon from "./../../../assets/swatchbook.png";
import QTIcon from "./../../../assets/like.png";
import RNDIcon from "./../../../assets/femenine.png";

import PUIcon from "./../../../assets/open-cardboard-box.png";
import WHIcon from "./../../../assets/warehouse.png";

const Unit = () => {
  const unitArray = [
    { title: "Production Department", image: PDIcon },
    { title: "Quality Testing Unit", image: QTIcon },
    { title: "Research and Development Unit", image: RNDIcon },
  ];
  const unitArray2 = [
    { title: "Packaging Unit", image: PUIcon },
    { title: "Warehouse Unit", image: WHIcon },
  ];

  return (
    <section className="unit-section">
      <div className="unit-container">
        <h2>The Units in Our Facility are:</h2>
        <div className="unit-box-row1">

          {unitArray.map((item) => (
            <div className="unit-box">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="unit-box-row1">

           {unitArray2.map((item) => (
            <div className="unit-box">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unit;

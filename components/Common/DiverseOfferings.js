import React from "react";
import Offer from "../slider/Offer";

const DiverseOfferings = () => {
  return (
    <section className="section mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">
              Diverse Offerings – One Holistic Platform
            </h2>
            
          </div>
        </div>
        <div className="mt-50">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-4">
              <Offer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseOfferings;

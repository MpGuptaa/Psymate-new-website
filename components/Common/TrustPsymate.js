import React from "react";

const TrustPsymate = ({ stars, title, description, stats }) => {
  return (
    <section className="section bg-brand-4 box-why-trusted-11">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 mb-30">
            <div className="rating">
              {stars.map((star, index) => (
                <img key={`star-${index}`}  src={star} alt={`star-${index}`} />
              ))}
            </div>
            <h2 className="color-white mb-5">{title}</h2>
          </div>
          <div className="col-xl-7 col-lg-7 mb-30">
            <p className="font-sm color-white mb-20">{description}</p>
            <div className="row">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20"
                >
                  <h2 className="color-white text-center">{stat.value}</h2>
                  <p className="font-lg color-white text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPsymate;

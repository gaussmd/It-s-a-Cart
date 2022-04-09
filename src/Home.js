import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
const Home = () => {
  console.warn(data.productData);
  return (
    
    <> 
    <div style={{font: "50px" }} >
      <h1 className="text-center mt-4"> <strong style={{color:"blue" }}><ion-icon name="home-outline"></ion-icon> </strong></h1>
      </div>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item,index) => {
            return (
              <Itemcard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

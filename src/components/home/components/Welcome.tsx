import React from "react";

export const BASE_URL = "https://cookiefactory.co/output/";
const ROWS = 3;
const COLUMNS = 5;
export const IMAGES_AMOUNT = 1200;
let images: string[] = [];
for (let index = 0; index < ROWS * COLUMNS; index++) {
  let rand = Math.floor(Math.random() * IMAGES_AMOUNT);
  images.push(BASE_URL + rand + ".png");
}

export default function Welcome() {
  return (
    <div className="max-width">
      <div className="title align-center">
        <h1>Hungry for cookies?</h1>
        <p>
          Get some of the 10,500 unique cookie NFTs in 3 different batches. Have them until you are full.
        </p>  
      </div>
      <div className="hero-container align-center">
      <a href="/cookies">
        <div className="grid">
          {images.map((src) => {
            return (
              
                <img src={src} />
              
            );
          })}
        </div>
        </a>
      
      </div>
    </div>
  );
}

import React from "react";

export const BASE_URL = "https://cookiefactory.co/output/";
const ROWS = 3;
const COLUMNS = 5;
const IMAGES_AMOUNT = 9960;
let images: string[] = [];
for (let index = 0; index < ROWS * COLUMNS; index++) {
  let rand = Math.floor(Math.random() * IMAGES_AMOUNT);
  images.push(BASE_URL + rand + ".png");
}

export default function Welcome() {
  return (
    <div className="max-width">
      <div className="hero-container align-center">
        <div className="grid">
          {images.map((src) => {
            return (
              <a href="/cookies">
                <img style={{ width: "75%" }} src={src} />
              </a>
            );
          })}
        </div>
        <h1>Hungry for cookies?</h1>
        <p>
          Get some of the 9,960 unique cookie NFT. Have them until you are full.
        </p>
      </div>
    </div>
  );
}

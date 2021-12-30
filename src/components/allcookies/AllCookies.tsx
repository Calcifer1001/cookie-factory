import React from "react";
import { BASE_URL, IMAGES_AMOUNT } from "../home/components/Welcome";
import "./assets/allcookies.css";

let images: string[] = [];
for (let index = 0; index < IMAGES_AMOUNT; index++) {
  images.push(BASE_URL + index + ".png");
}

export default function AllCookies() {
  return (
    <main>
      <div className="grid-all">
        {images.map((src) => {
          return <img src={src} />;
        })}
      </div>
    </main>
  );
}


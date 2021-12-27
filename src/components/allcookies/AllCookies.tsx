import React from 'react';
import { BASE_URL } from '../home/components/Welcome';
import "./assets/allcookies.css";

const IMAGES_AMOUNT = 9960
let images: string[] = [] 
for (let index = 0; index < IMAGES_AMOUNT; index++) {
  images.push(BASE_URL + index + ".png")
}

export default function AllCookies() {
    return (
        <main>
            <div className="grid-all">
            {
              images.map(src => {
                return <img style={{width: "75%"}} src={src} />
              })
            }
          </div>
        </main>
    );
};

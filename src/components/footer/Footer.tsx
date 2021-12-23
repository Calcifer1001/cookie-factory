import React from "react";

export const Footer = () => {
  return (
    <>
      <footer
        style={{
          position: "absolute",
          height: "70px",
          width: "100%",
          background: "#915731",
          bottom: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            alignSelf: "center",
            margin: "auto",
            fontWeight: 700,
          }}
        >
          Made In North Pole &#47; Copyright &#174; 2021
        </p>
      </footer>
    </>
  );
};


import React from "react";
export default function Header() {
  return (
    <>
      <div className="navbar">
          {/* eslint-disable-next-line */}
          <a href="">Home</a>
          {/* eslint-disable-next-line */}
            <a href="/about">About</a>
            {/* eslint-disable-next-line */}
            <a href="/contact">Contact</a>
      </div>
      <div className="header">This is Header</div>
    </>
  );
}

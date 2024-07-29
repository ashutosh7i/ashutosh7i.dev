import React, { useState } from "react";
import Image from "next/image";
import useSound from "use-sound";
import "./a.min.css";
import b from "./assets/image.jpg";

const D = () => {
  const [play, { stop }] = useSound("/sounds/heroHover.mp3");
  const [e, f] = useState(-1);

  const g = [
    <div key={e} className="h"></div>,
    <div key={e} className="i"></div>,
    <div key={e} className="j"></div>,
    <div key={e} className="k"></div>,
  ];

  const l = () => {
    f((m) => (m + 1) % g.length);
  };

  return (
    <section className="v">
      <figure
        className="w"
        onMouseEnter={() => {
          play();
          l();
        }}
        onMouseLeave={() => stop()}
      >
        <div className="x">
          <div className="y">
            <div className="z"></div>
            <div className="aa"></div>
            <div className="ab"></div>
            <div className="ac"></div>
            <div className="ad"></div>
            <div className="ae"></div>
          </div>
          <div className="af">{e !== -1 ? g[e] : null}</div>
        </div>
        <div className="ag">
          <Image src={b} alt="" />
        </div>
      </figure>
    </section>
  );
};

export default D;

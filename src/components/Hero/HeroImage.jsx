import React, { useState } from 'react';
import './a.min.css';
import b from './assets/imggg.jpg';
import c from './1.mp3';

const D = () => {
  const [e, f] = useState(-1);

  const g = [
    <div className="h"></div>,
    <div className="i"></div>,
    <div className="j"></div>,
    <div className="k"></div>,
  ];

  const l = () => {
    f(m => (m + 1) % g.length);
    n(c);
  };

  async function n(o) {
    let p = new (window.AudioContext || window.webkitAudioContext)();
    let q = new XMLHttpRequest();
    q.open('GET', o, true);
    q.responseType = 'arraybuffer';

    let r = await new Promise((s, t) => {
      q.onload = function () {
        p.decodeAudioData(q.response, s, t);
      };
      q.send();
    });

    let u = p.createBufferSource();
    u.buffer = r;
    u.connect(p.destination);
    u.loop = false;
    u.start();
  }

  return (
    <section className="v">
      <figure className="w" onMouseEnter={l}>
        <div className="x">
          <div className="y">
            <div className="z"></div>
            <div className="aa"></div>
            <div className="ab"></div>
            <div className="ac"></div>
            <div className="ad"></div>
            <div className="ae"></div>
          </div>
          <div className="af">
            {e !== -1 ? g[e] : null}
          </div>
        </div>
        <div className="ag">
          <img src={b} alt="" />
        </div>
      </figure>
    </section>
  );
};

export default D;
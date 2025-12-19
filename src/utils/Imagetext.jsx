import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ImageText() {
  const containerRef = useRef(null);
  const whiteRef = useRef(null);
  const blackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hide both initially
      gsap.set([whiteRef.current, blackRef.current], {
        autoAlpha: 0,
        y: 100,
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl
        // WHITE
        .to(whiteRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        })
        .to(whiteRef.current, {
          autoAlpha: 0,
          y: -100,
          duration: 1,
          delay: 1,
        })

        // BLACK
        .to(blackRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        })
        .to(blackRef.current, {
          autoAlpha: 0,
          y: -100,
          duration: 1,
          delay: 1,
        });
        /* ===== CARD ANIMATION ===== */
        gsap.to(".left-card", {
            y: -40,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        
        gsap.to(".right-card", {
            y: 40,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
      <div className="main-wrapper" ref={containerRef}>
          {/* LEFT: CAR */}
          <div className="slide">
              <div className="item" ref={whiteRef}>
                  <img src="/assets/whitecar.jpg" alt="White Car" />
                  <div className="text">
                      <h2>White Car</h2>
                      <p>Luxury & Comfort</p>
                  </div>
              </div>
              
              <div className="item" ref={blackRef}>
                  <img src="/assets/blackcar.jpg" alt="Black Car" />
                  <div className="text">
                      <h2>Black Car</h2>
                      <p>Power & Elegance</p>
                  </div>
              </div>
          </div> 

        <div className="cards-wrapper">
        <div className="card left-card">
            <p># 1</p>
            <p>A</p>
        </div>
        <div className="card right-card">
            <p># 2</p>
            <p>B</p>
        </div>

        <div className="card left-card">
            <p># 3</p>
            <p>C</p>
        </div>
        <div className="card right-card">
            <p># 4</p>
            <p>D</p>
        </div>

        <div className="card left-card">
            <p># 5</p>
            <p>E</p>
        </div>
        <div className="card right-card">
            <p># 6</p>
            <p>F</p>
        </div>

        <div className="card left-card">
            <p># 7</p>
            <p>G</p>
        </div>
        <div className="card right-card">
            <p># 8</p>
            <p>H</p>
        </div>
        </div>
   

      </div>
  );
}

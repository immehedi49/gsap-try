import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Imagedesign() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    // Left card floating
    gsap.to(card1Ref.current, {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Right card floating (slightly different timing)
    gsap.to(card2Ref.current, {
      y: 12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="hero">
      <div className="image-wrapper">
        <img
          src="/src/utils/man.jpg"
          alt="backgr"
          className="main-img"
        />

        {/* Left card */}
        <div ref={card1Ref} className="maincard card1">
          Experience
        </div>

        {/* Right card */}
        <div ref={card2Ref} className="maincard card2">
          From Setup
        </div>
      </div>
    </div>
  );
}

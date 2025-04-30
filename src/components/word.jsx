import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HollowTextGSAP = ({ text, stroke, fillColor }) => {
  const textRef = useRef();

  useEffect(() => {
    const tspans = textRef.current.querySelectorAll("tspan");

    const tl = gsap.timeline({ paused: true });
    tl.to(tspans, {
      fill: fillColor,
      stagger: 0.05,
      duration: 0.3,
    });

    const svg = textRef.current.closest("svg");
    svg.addEventListener("mouseenter", () => tl.play());
    svg.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      svg.removeEventListener("mouseenter", () => tl.play());
      svg.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <div className="absolute bottom-0  w-full sm:w-[70%] px-4 sm:px-0">
      <svg viewBox="0 0 400 64" className="w-full">
        <text
          ref={textRef}
          x="0"
          y="50"
          fontSize="60"
          fontWeight="bold"
          fill="transparent"
          stroke={`${stroke}`}
          strokeWidth="1"
          fontFamily="Arial, sans-serif"
        >
          {text.split("").map((char, i) => (
            <tspan key={i}>{char}</tspan>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default HollowTextGSAP;

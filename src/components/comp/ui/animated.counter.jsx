import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AnimatedCounter = ({ value }) => {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [numericValue, setNumericValue] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split into prefix, numeric, and suffix
  useEffect(() => {
    if (typeof value === "string") {
      const match = value.match(/^(.*?)(\d+)(.*)$/);
      if (match) {
        setPrefix(match[1]);
        setNumericValue(parseInt(match[2], 10));
        setSuffix(match[3]);
      }
    } else if (typeof value === "number") {
      setPrefix("");
      setNumericValue(value);
      setSuffix("");
    }
  }, [value]);

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: numericValue,
        transition: { duration: 1, ease: "linear" },
      });
    }
  }, [isInView, numericValue]);

  
    return (
      <motion.span
        ref={ref}
        animate={controls}
        initial={{ count: 0 }}
        onUpdate={(latest) => {
          setDisplayValue(Math.round(latest.count));
        }}
      >
        {numericValue > 0 ? (
          <>
            {prefix}
            {displayValue}
            {suffix}
          </>
        ) : value}
      </motion.span>
    );
};

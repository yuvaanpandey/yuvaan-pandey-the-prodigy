import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const display = to >= 1000 ? Math.round(val).toLocaleString() : to % 1 === 0 ? Math.round(val) : val.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./Stats.css";

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="statNumber">
      {count.toLocaleString()}<span className="statPlus">{suffix}</span>
    </span>
  );
};

export default function Stats() {
  const stats = [
    { number: 500, suffix: "+", label: "Active Volunteers in Abuja" },
    { number: 25, suffix: "+", label: "Campaigns Completed" },
    { number: 15000, suffix: "+", label: "Lives Impacted in FCT" },
    { number: 2000, suffix: "+", label: "Global Volunteers Network" },
  ];

  return (
    <section className="stats" id="stats">
      <div className="statsContainer">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="statsTitle"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="statsGrid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="statCard"
            >
              <CountUp end={stat.number} suffix={stat.suffix} />
              <p className="statLabel">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
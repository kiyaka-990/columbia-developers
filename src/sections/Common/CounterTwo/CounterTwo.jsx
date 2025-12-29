"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CounterTwo = () => {
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const statistics = [
    {
      end: 50,
      suffix: "+",
      text: "Projects Completed",
      icon: "ri-building-2-line",
    },
    {
      end: 99,
      suffix: "%",
      text: "Client Satisfaction",
      icon: "ri-shake-hands-line",
    },
    {
      end: 2,
      suffix: "M+",
      text: "Procurement Volume",
      icon: "ri-truck-line",
    },
    {
      end: 33,
      suffix: "+",
      text: "Years of Excellence",
      icon: "ri-medal-line",
    },
  ];

  return (
    <div 
      className="counter-area-1 position-relative" 
      ref={counterRef} 
      style={{ 
        paddingTop: "80px", // Pushes the content down away from the "View More" button
        paddingBottom: "80px",
        backgroundColor: "#ffffff",
        zIndex: "10" 
      }}
    >
      <div className="container">
        <motion.div 
          className="row g-4 justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={counterInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {statistics.map((stat, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="counter-item text-center">
                <div className="icon-box mb-3">
                  <i className={`${stat.icon}`} style={{ fontSize: '36px', color: '#e31e24' }}></i>
                </div>
                <h2 className="number-style mb-1">
                  {counterInView ? (
                    <CountUp start={0} end={stat.end} duration={3} />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </h2>
                <p className="label-style">{stat.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .counter-item {
          padding: 30px 15px;
          transition: transform 0.3s ease;
          border-radius: 12px;
        }
        
        .counter-item:hover {
          transform: translateY(-5px);
        }

        .number-style {
          font-size: 3rem;
          font-weight: 800; /* Solid bold numbers */
          color: #1a1a1a;
          line-height: 1;
        }

        .label-style {
          font-size: 12px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: #fdf2f2; /* Very light red tint */
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .number-style {
            font-size: 2rem;
          }
          .label-style {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CounterTwo;
// src/components/effects/MeteorBackground.jsx
import React from "react";

const MeteorBackground = () => {
  const meteors = new Array(25).fill(0);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((_, i) => {
        const delay = Math.random() * 5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 2 + Math.random() * 2; // lebih lama biar smooth
        const size = Math.random() * 2 + 1; // variasi ukuran

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/90 shadow-[0_0_12px_4px_rgba(255,255,255,0.7)]"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `meteorMove ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

export default MeteorBackground;

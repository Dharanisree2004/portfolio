import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Code. Debug. Repeat.",
          "Backend Java Developer",
          "Full Stack Developer",
          "Software Developer"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 35, // ← faster typing speed
      }}
    />
  );
}

export default Type;

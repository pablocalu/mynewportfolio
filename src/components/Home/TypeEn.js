import React from "react";
import Typewriter from "typewriter-effect";

function TypeEn() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "JavaScript",
          "React",
          "Node",
          "Express"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeEn;
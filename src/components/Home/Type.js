import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <div className="glitch" data-text="">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Trader")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Freelancer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Software Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Financial Ananlyst")
            .start();
        }}
      />
    </div>
  );
}

export default Type;

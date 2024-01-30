"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 150, // Adjust the number of particles as needed
        },
        color: {
          value: "#8c8c8c", // Smoke color
        },
        shape: {
          type: "circle", // You can use "circle" or "triangle" for a basic smoke shape
        },
        opacity: {
          value: 0.4, // Adjust the opacity to control the density of the smoke
          animation: {
            enable: true,
            speed: 0.1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2, // Adjust the size of smoke particles
          random: true, // Randomize particle sizes for a more natural look
          animation: {
            enable: true,
            speed: 0.1,
            minimumValue: 5,
            sync: true,
          },
        },
        move: {
          enable: true,
          direction: "none", // Make particles move randomly
          speed: 0.5, // Adjust the speed of particle movement
          outMode: "out", // Define how particles behave when they move out of the canvas
        },
      },
    }),
    []
  );
  if (init) {
    return (
      <Particles
        className="w-full h-full absolute translate-z-0"
        id="tsparticles"       
        particlesLoaded={particlesLoaded}
        options={options}
      ></Particles>
    );
  }
  return <></>;
};

export default ParticlesContainer;

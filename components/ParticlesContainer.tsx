import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "text-primary-500" } },
        particles: {
          color: { value: "#fff" },
          move: {
            direction: "bottom",
            enable: true,
            outModes: "out",
            speed: 0.5,
          },
          number: {
            density: {
              enable: true,
              // area: 800
            },
            value: 400,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 5,
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 10,
          },
          zIndex: {
            value: { min: 0, max: 100 },
          },
        },
      }}
    ></Particles>
  );
};

export default ParticlesContainer;

import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#bf814c",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#e46c3e",
            },
            polygon: {
              nb_sides: 3,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.4,
              sync: false,
            },
          },
          size: {
            value: 2.2,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.01,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
);

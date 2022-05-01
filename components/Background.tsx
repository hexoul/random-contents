import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

type Props = {
  img?: string
}

const Background = ({ img = 'https://particles.js.org/images/background3.jpg' }: Props) => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        "background": {
          "color": {
            "value": "#ffffff"
          },
          "image": `url('${img}')`,
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
        },
        "backgroundMask": {
          "cover": {
            "color": {
              "value": {
                "r": 255,
                "g": 255,
                "b": 255
              }
            }
          },
          "enable": true
        },
        "fullScreen": {
          "zIndex": -1
        },
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "force": 60
              }
            }
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 1,
              "size": 100,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "grab": {
              "distance": 400
            },
            "repulse": {
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "enable": true
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            }
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 80
          },
          "opacity": {
            "animation": {
              "speed": 1,
              "minimumValue": 0.1
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 1,
              "max": 30
            },
            "animation": {
              "speed": 40,
              "minimumValue": 0.1
            }
          }
        }
      }}
    />
  );
}

export default Background

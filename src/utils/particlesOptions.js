const particlesOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#c8c8c8',
        blur: 5,
        distance: 150,
        opacity: 0.9,
        width: 1
      }
    },
    color: {
      value: ['#BD10E0', '#B8E986', '#50E3C2', '#50E3C2', '#E86363']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#b5b2b1'
      }
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: true,
        speed: 15,
        size_min: 0.2,
        sync: true
      }
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1000
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
        out_mode: 'bounce'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 150,
        size: 8,
        duration: 2,
        opacity: 10,
        speed: 2
      }
    }
  },
  retina_detect: true
};

export { particlesOpt };

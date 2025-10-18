import './cylinder/cylinder.css';
import './circle/circle.css';
import './tube/tube.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Cylindar } from './cylinder/cylinder';
import { Circle } from './circle/circle';
import { Tube } from './tube/tube';

class App {
  lenis: Lenis;
  cylinder!: Cylindar;
  circle!: Circle;
  tube!: Tube;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis();

    this.init();
    this.addEventListeners();
  }

  init(): void {
    this.setupLenis();
    this.initAllEffects();
  }

  // optional
  setupLenis(): void {
    this.lenis.on('scroll', () => {
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  initAllEffects(): void {
    this.cylinder = new Cylindar();
    this.circle = new Circle();
    this.tube = new Tube();
  }

  addEventListeners(): void {
    window.addEventListener('resize', () => {
      this.cylinder.resize();
      this.circle.resize();
      this.tube.resize();
    });
  }
}

new App();

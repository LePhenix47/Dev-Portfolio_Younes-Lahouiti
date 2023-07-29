import { Particle } from "./particle.class";

/**
 * Represents a line effect created by particles.
 */
export class LineEffect {
  /**
   * The canvas element on which the effect is drawn.
   *   @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * The canvas 2D context used to draw the effect.
   *  @type {CanvasRenderingContext2D}
   */
  canvasContext: CanvasRenderingContext2D;

  /**
   * The array of particles in the effect.
   *  @type {Particle[]}
   */
  private particlesArray: Particle[];

  /**
   * The number of particles in the effect.
   *  @type {number}
   */
  particlesAmount: number;

  /**
   * Constructs a new LineEffect object.
   * @param {HTMLCanvasElement} canvas - The canvas element on which to draw the effect.
   * @param {number} particlesAmount - The number of particles in the effect.
   *
   * @constructor
   */
  constructor(canvas: HTMLCanvasElement, particlesAmount: number) {
    this.canvas = canvas;
    //@ts-ignore
    this.canvasContext = this.canvas.getContext("2d");

    this.particlesArray = [];
    this.particlesAmount = particlesAmount;

    this.initialize();
  }

  /**
   * Initializes the effect by creating particles.
   * @private
   * @returns {void}
   */
  private initialize(): void {
    for (let i = 0; i < this.particlesAmount; i++) {
      const particle = new Particle(this.canvas);
      this.particlesArray.push(particle);
    }
  }

  /**
   * Draws a line between two points on the canvas.
   *
   * @param {Particle} pointA - The starting point of the line.
   * @param {Particle} pointB - The ending point of the line.
   * @param {string} color - The color of the line.
   *
   * @returns {void}
   */
  private drawLine(pointA: Particle, pointB: Particle, color: string): void {
    this.canvasContext.beginPath();

    this.canvasContext.strokeStyle = color;

    this.canvasContext.moveTo(pointA.x, pointA.y);
    this.canvasContext.lineTo(pointB.x, pointB.y);

    this.canvasContext.stroke();

    this.canvasContext.closePath();
  }

  /**
   * Animates the particles in the effect.
   * @returns {void}
   */
  animateParticles(): void {
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle1: Particle = this.particlesArray[i];
      particle1.update();
      particle1.draw();

      for (let j = 0; j < this.particlesArray.length; j++) {
        const particle2: Particle = this.particlesArray[j];

        const distanceX: number = particle2.x - particle1.x;
        const distanceY: number = particle2.y - particle1.y;

        const hypotenuse: number = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const particlesAreClose: boolean = hypotenuse <= 100;
        if (particlesAreClose) {
          this.drawLine(
            particle1,
            particle2,
            `rgba(255, 255, 255, ${1 - hypotenuse / 100})`
          );
        }
      }
    }
  }
}

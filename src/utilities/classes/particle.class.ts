/**
 * Represents a particle in the canvas.
 */
export class Particle {
  /**
   * The canvas element.
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * The canvas 2D rendering context.
   * @type {CanvasRenderingContext2D}
   */
  canvasContext: CanvasRenderingContext2D;

  /**
   * The x-coordinate of the particle.
   * @type {number}
   */
  x: number;

  /**
   * The y-coordinate of the particle.
   * @type {number}
   */
  y: number;

  /**
   * The size of the particle in pixels.
   * @type {number}
   */
  radius: number;

  /**
   * The horizontal velocity vector of the particle.
   * @type {number}
   */
  vectorX: number;

  /**
   * The vertical velocity vector of the particle.
   * @type {number}
   */
  vectorY: number;

  /**
   * Constructs a new Particle object.
   * @param {HTMLCanvasElement} canvas - The canvas element on which to draw the particle.
   *
   * @constructor
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    //@ts-ignore
    this.canvasContext = this.canvas.getContext("2d");

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.radius = 5;
    this.vectorX = Math.random() * 3 - 1.5;
    this.vectorY = Math.random() * 3 - 1.5;
  }

  /**
   * Updates the position of the particle.
   * @returns {void}
   */
  update(): void {
    this.x += this.vectorX;
    this.y += this.vectorY;

    this.checkCollisionX();
    this.checkCollisionY();
  }

  /**
   * Checks for horizontal collisions and updates velocity vector if necessary.
   * @returns {void}
   */
  private checkCollisionX(): void {
    const leftSideOverflow: boolean = this.x - this.radius <= 0;

    const rightSideOverflow: boolean =
      this.x + this.radius >= this.canvas.width;

    const overflowsOnHorizontalSides: boolean =
      rightSideOverflow || leftSideOverflow;

    if (overflowsOnHorizontalSides) {
      this.vectorX *= -1;
    }
  }

  /**
   * Checks for vertical collisions and updates velocity vector if necessary.
   * @returns {void}
   */
  private checkCollisionY(): void {
    const topSideOverflow: boolean = this.y - this.radius <= 0;

    const bottomSideOverflow: boolean =
      this.y + this.radius >= this.canvas.height;

    const overflowsOnVerticalSides: boolean =
      topSideOverflow || bottomSideOverflow;

    if (overflowsOnVerticalSides) {
      this.vectorY *= -1;
    }
  }

  /**
   * Draws the particle on the canvas.
   * @returns {void}
   */
  draw(): void {
    this.canvasContext.fillStyle = "white";

    this.canvasContext.beginPath();

    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    this.canvasContext.fill();
  }
}

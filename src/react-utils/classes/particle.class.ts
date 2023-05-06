/**
 * Represents a particle in the canvas.
 */
export class Particle {
  canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;
  vectorX: number;
  vectorY: number;
  /**
   * Constructs a new Particle object.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    //@ts-ignore
    this.canvasContext = this.canvas.getContext("2d");
    /**
     * The x-coordinate of the particle.
     * @type {number}
     */
    this.x = Math.random() * this.canvas.width;

    /**
     * The y-coordinate of the particle.
     * @type {number}
     */
    this.y = Math.random() * this.canvas.height;

    /**
     * The size of the particle in pixels.
     * @type {number}
     */
    this.radius = 5;

    /**
     * The horizontal velocity vector of the particle.
     * @type {number}
     */
    this.vectorX = Math.random() * 3 - 1.5;

    /**
     * The vertical velocity vector of the particle.
     * @type {number}
     */
    this.vectorY = Math.random() * 3 - 1.5;
  }

  /**
   * Updates the position of the particle.
   * @returns {void}
   */
  update(): void {
    //We update their position
    this.x += this.vectorX;
    this.y += this.vectorY;

    this.checkCollisionX();
    this.checkCollisionY();
  }

  private checkCollisionX() {
    //We check their collision
    const leftSideOverflow: boolean = this.x - this.radius <= 0;

    const rightSideOverflow: boolean =
      this.x + this.radius >= this.canvas.width;

    const overflowsOnHorizontalSides: boolean =
      rightSideOverflow || leftSideOverflow;

    if (overflowsOnHorizontalSides) {
      this.vectorX *= -1;
    }
  }

  private checkCollisionY() {
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
   * Draws the particle on the canvas
   * @returns {void}
   */
  draw(): void {
    //We give a background color to our particle
    this.canvasContext.fillStyle = "white";

    //We start drawing a path
    this.canvasContext.beginPath();

    //We draw a circle using the initial X,Y coords, the radius, starting angle and finishing angle
    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    //We apply the background color given to our particle
    this.canvasContext.fill();
  }
}

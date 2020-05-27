(function () {
  const canvas = document.getElementById("canvas");
  canvas.height = document.body.clientHeight;
  canvas.width = document.body.clientWidth;
  const ctx = canvas.getContext("2d");
  const balls = [];

  // Setup some constants stuff
  const INTERVAL = (1 / 60) * 1000;
  const BALL_RADIUS = 5;
  const GRAVITY = 0.5; // Acceleration due to gravity
  const X_DRAG = 0.8 / 60;

  // Add click listener
  canvas.onclick = addNewBall;

  class Ball {
    constructor(positionX, positionY, velocityX, velocityY) {
      this.position = { x: positionX, y: positionY };
      this.velocity = { x: velocityX, y: velocityY };
    }
  }

  /**
   * @param {Event} event
   */
  function addNewBall({ clientX, clientY }) {
    balls.push(new Ball(clientX, clientY, randomVelocity(), randomVelocity()));
  }

  function randomVelocity() {
    return Math.floor(Math.random() * 20) - 10;
  }

  setInterval(loop, INTERVAL);

  function loop() {
    if (!balls.length) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach((ball) => {
      const {
        position: { x, y },
      } = ball;
      // Render ball
      ctx.beginPath();
      ctx.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#000";
      ctx.fill();
      ctx.closePath();

      // Recalculate position for next render
      recalculatePosition(ball);
    });
  }

  /**
   * Recalculates the position of the ball
   * @param {Ball} ball
   */
  function recalculatePosition({ position, velocity }) {
    position.x += velocity.x;
    position.y += velocity.y;

    // If either wall is hit, change direction on x axis and slow down slightly
    if (
      position.x - BALL_RADIUS < 0 ||
      position.x > canvas.width - BALL_RADIUS
    ) {
      velocity.x *= -1;
    }

    // If hits floor
    if (position.y + BALL_RADIUS > canvas.height) {
      // Reset ball position on y axis
      position.y = canvas.height - BALL_RADIUS;
      velocity.y *= -1;
      velocity.y *= 0.8;

      // Stop ball from moving at the end
      if (velocity.y < 0 && velocity.y > -0.1 && velocity.x === 0) {
        velocity.y = 0;
      }

      if (Math.abs(velocity.x) < 0.1) {
        velocity.x = 0;
      }
    }

    velocity.y += GRAVITY;

    if (velocity.x > 0) {
      velocity.x -= X_DRAG;
    }
    if (velocity.x < 0) {
      velocity.x += X_DRAG;
    }
  }
})();

import { useEffect, useRef } from "react";
import "./CanvasHearts.css";

export default function CanvasHearts() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const hearts = [];
    const bursts = [];

    // Create floating hearts
    function createHeart() {
      const size = 10 + Math.random() * 50;
      hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + size,
        size,
        speed: 1 + Math.random() * 2,
        drift: (Math.random() - 0.5) * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        wobble: Math.random() * 500
      });
    }

    // Burst heart particles
    function createBurst(x, y) {
      const colors = ["#ff6fb0", "#ff85c2", "#ff9fd1", "#ffc4e4"];

      for (let i = 0; i < 25; i++) {
        bursts.push({
          x,
          y,
          size: 8 + Math.random() * 18,
          angle: Math.random() * Math.PI * 2,
          speed: 2 + Math.random() * 4,
          life: 1,
          decay: 0.015 + Math.random() * 0.02,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    const spawnInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) createHeart();
    }, 400);

    // Draw heart shape
    function drawHeart(ctx, x, y, size, opacity, color = "pink") {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(
        x - size / 2, y - size / 2,
        x - size, y + size / 3,
        x, y + size
      );
      ctx.bezierCurveTo(
        x + size, y + size / 3,
        x + size / 2, y - size / 2,
        x, y
      );

      ctx.fill();
      ctx.restore();
    }

    // Click event for burst
    const clickHandler = (e) => {
      const rect = canvas.getBoundingClientRect();
      createBurst(e.clientX - rect.left, e.clientY - rect.top);
    };

    window.addEventListener("click", clickHandler);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Floating hearts
      hearts.forEach((h, i) => {
        h.y -= h.speed;
        h.x += Math.sin((h.wobble += 0.02)) * h.drift;

        drawHeart(ctx, h.x, h.y, h.size, h.opacity);

        if (h.y < -50) hearts.splice(i, 1);
      });

      // Burst hearts
      bursts.forEach((b, i) => {
        // Movement
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;
        b.life -= b.decay;

        drawHeart(ctx, b.x, b.y, b.size, b.life, b.color);

        if (b.life <= 0) bursts.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", clickHandler);
      clearInterval(spawnInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="hearts-canvas"></canvas>;
}

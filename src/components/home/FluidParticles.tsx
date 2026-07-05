"use client";

import { useEffect, useRef } from "react";

export function FluidParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse interaction
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    
    canvas.width = width;
    canvas.height = height;

    const colors = ["#7C3AED", "#C084FC", "#06B6D4", "#22D3EE"];
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      vx: number;
      vy: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
      }

      update() {
        // Natural fluid movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (Fluid repulsion)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        
        // Add a nice glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (width * height) / 9000; // Responsive density
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

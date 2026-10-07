"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  isAccent: boolean;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: -1000, y: -1000, radius: 120 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 32000), 28);

    function initParticles() {
      particles = [];
      for (let i = 0; i < count; i++) {
        const isAccent = Math.random() < 0.25;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: isAccent ? Math.random() * 2 + 1.2 : Math.random() * 1.5 + 0.8,
          baseAlpha: isAccent ? 0.45 : 0.2,
          alpha: isAccent ? 0.45 : 0.2,
          isAccent,
        });
      }
    }

    initParticles();

    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw faint connection filaments in a single batched stroke
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(242, 240, 231, 0.05)";
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 11000) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity reaction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const proximity = 1 - mDist / mouse.radius;
          p.alpha = Math.min(1, p.baseAlpha + proximity * 0.5);
          // slight drift away from mouse
          p.x -= (mdx / mDist) * proximity * 0.8;
          p.y -= (mdy / mDist) * proximity * 0.8;
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.isAccent) {
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
          ctx.shadowColor = "rgba(56, 189, 248, 0.7)";
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(248, 250, 252, ${p.alpha})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Dynamic atmospheric glow orbs */}
      <div className="absolute right-[-10%] top-12 h-[480px] w-[480px] rounded-full bg-[#0e131f]/90 blur-[80px] will-change-transform" />
      <div 
        className="absolute -left-20 top-8 h-[420px] w-[420px] rounded-full bg-[#6366f1]/12 blur-[90px] will-change-transform" 
        style={{ animation: "float 14s ease-in-out infinite" }}
      />
      <div 
        className="absolute left-1/3 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38bdf8]/08 blur-[90px] will-change-transform" 
        style={{ animation: "float 16s ease-in-out infinite 2s" }}
      />

      {/* Subtle technical grid mask */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_30%,transparent_80%)]" />

      {/* Interactive particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

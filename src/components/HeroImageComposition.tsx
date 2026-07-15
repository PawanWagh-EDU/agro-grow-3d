"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

interface HeroImageCompositionProps {
  mainImage: string;
  seedlingImage: string;
  berryImage: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HeroImageComposition({
  mainImage,
  seedlingImage,
  berryImage,
}: HeroImageCompositionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // raw mouse position (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 150, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // whole composition tilt (subtle, ±8deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  // main image parallax (small movement)
  const mainX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const mainY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // seedling image parallax (faster / opposite feel = closer to viewer)
  const seedlingX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const seedlingY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  // berry box parallax (inverse direction for depth)
  const berryX = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const berryY = useTransform(smoothY, [-0.5, 0.5], [22, -22]);

  // "Since 2015" badge parallax (independent speed)
  const badgeX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const badgeY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  // rating badge parallax
  const ratingX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const ratingY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="relative h-[420px] sm:h-[520px] lg:h-[600px] max-w-full mx-auto isolate z-10 will-change-transform"
    >
      <div
        className="relative w-full h-full max-w-[520px] mx-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Rating badge — top */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: easeOut }}
          style={{ x: ratingX, y: ratingY, z: 70 }}
          className="absolute -top-2 left-1 sm:left-0 z-30"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3.5 py-2 shadow-3d ring-1 ring-black/5"
          >
            <Star className="h-3.5 w-3.5 fill-berry text-berry" />
            <span className="text-xs font-bold text-foreground">4.9/5</span>
          </motion.div>
        </motion.div>

        {/* Main central image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          style={{ x: mainX, y: mainY, z: 20 }}
          className="absolute right-0 top-6 w-[78%] sm:w-[74%] h-[88%] overflow-hidden shadow-3d ring-1 ring-white/20 z-10 bg-card"
        >
          <img
            src={mainImage}
            alt="Strawberry plant leaves"
            className="h-full w-full object-cover"
            onError={(e) => { console.error('Main image failed to load:', mainImage); }}
          />
        </motion.div>

        {/* Top-left floating seedling image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
          style={{ x: seedlingX, y: seedlingY, z: 90 }}
          className="absolute left-0 top-[18%] w-[38%] sm:w-[34%] aspect-[4/3] overflow-hidden shadow-3d ring-1 ring-white/30 z-20 bg-card"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <img
              src={seedlingImage}
              alt="Root-inspected seedlings"
              className="h-full w-full object-cover"
              onError={(e) => { console.error('Seedling image failed to load:', seedlingImage); }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom-right floating strawberry box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          style={{ x: berryX, y: berryY, z: 100 }}
          className="absolute right-[-2%] sm:right-0 bottom-[6%] w-[46%] sm:w-[42%] aspect-square overflow-hidden shadow-3d ring-1 ring-white/30 z-20 bg-card"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="h-full w-full"
          >
            <img
              src={berryImage}
              alt="Fresh strawberries"
              className="h-full w-full object-cover"
              onError={(e) => { console.error('Berry image failed to load:', berryImage); }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom-left "Since 2015" badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
          style={{ x: badgeX, y: badgeY, z: 110 }}
          className="absolute left-[4%] sm:left-2 bottom-0 z-30"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="flex items-center gap-2 rounded-2xl bg-cream text-primary px-4 py-3 shadow-3d"
          >
            <ShieldCheck className="h-5 w-5 text-primary" />
            <div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Since 2015</div>
              <div className="text-sm font-display font-bold">Farmer-trusted</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

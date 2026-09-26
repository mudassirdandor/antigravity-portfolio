import React, { useRef, useState, useEffect, useId } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

// Established Porcelain + Eucalyptus + Deep Pine palette tokens
const C = {
  porcelain: '#F5F7F4',
  eucalyptus: '#DCE7DF',
  eucalyptusLight: '#EDF4EF',
  eucalyptusDark: '#C2D4C8',
  deepPine: '#25483C',
  pineDark: '#1A332B',
  pineDeepest: '#142721',
  pineLight: '#325D4E',
  softGreen: '#7DAA91',
  softGreenLight: '#A3C6B3',
  white: '#FFFFFF',
  darkCharcoal: '#26312B',
  mutedGray: '#69756D',
  skin: '#DFBAA4',
  skinShadow: '#C8A38E',
  borderDark: '#25483C',
  borderSubtle: 'rgba(37, 72, 60, 0.20)',
};

/**
 * Mathematically precise isometric box generator
 */
function IsoBox({
  cx,
  cy,
  rw,
  rd,
  h,
  topFill = C.white,
  leftFill = C.eucalyptus,
  rightFill = C.deepPine,
  stroke = C.borderDark,
  strokeWidth = 1.25,
  className = '',
}: {
  cx: number;
  cy: number;
  rw: number;
  rd: number;
  h: number;
  topFill?: string;
  leftFill?: string;
  rightFill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  className?: string;
}) {
  const ptTop = `${cx},${cy - h - rd}`;
  const ptRight = `${cx + rw},${cy - h}`;
  const ptBottom = `${cx},${cy - h + rd}`;
  const ptLeft = `${cx - rw},${cy - h}`;

  const leftFace = `${ptLeft} ${ptBottom} ${cx},${cy + rd} ${cx - rw},${cy}`;
  const rightFace = `${ptBottom} ${ptRight} ${cx + rw},${cy} ${cx},${cy + rd}`;

  return (
    <g className={className}>
      <polygon
        points={leftFace}
        fill={leftFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <polygon
        points={rightFace}
        fill={rightFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <polygon
        points={`${ptTop} ${ptRight} ${ptBottom} ${ptLeft}`}
        fill={topFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
}

/**
 * Mathematically precise isometric cylinder generator
 */
function IsoCylinder({
  cx,
  cy,
  rx,
  ry,
  h,
  topFill = C.white,
  bodyFill = `url(#cylGrad)`,
  stroke = C.borderDark,
  strokeWidth = 1.25,
  className = '',
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  h: number;
  topFill?: string;
  bodyFill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  className?: string;
}) {
  return (
    <g className={className}>
      <path
        d={`M ${cx - rx} ${cy - h} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy - h} v ${h} A ${rx} ${ry} 0 0 1 ${cx - rx} ${cy} Z`}
        fill={bodyFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <ellipse
        cx={cx}
        cy={cy - h}
        rx={rx}
        ry={ry}
        fill={topFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </g>
  );
}

/**
 * Premium Rounded Isometric Platform Generator
 */
function RoundedIsoPlatform({
  cx,
  cy,
  rx,
  ry,
  h,
  topFill = C.white,
  leftBevel = C.eucalyptus,
  rightBevel = C.deepPine,
  stroke = C.borderDark,
  strokeWidth = 1.35,
  className = '',
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  h: number;
  topFill?: string;
  leftBevel?: string;
  rightBevel?: string;
  stroke?: string;
  strokeWidth?: number | string;
  className?: string;
}) {
  return (
    <g className={className}>
      {/* Front-Left Bevel Extrusion */}
      <path
        d={`M ${cx - rx} ${cy - h} A ${rx} ${ry} 0 0 0 ${cx} ${cy - h + ry} v ${h} A ${rx} ${ry} 0 0 1 ${cx - rx} ${cy} Z`}
        fill={leftBevel}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Front-Right Bevel Extrusion */}
      <path
        d={`M ${cx} ${cy - h + ry} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy - h} v ${h} A ${rx} ${ry} 0 0 1 ${cx} ${cy + ry} Z`}
        fill={rightBevel}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Top Rounded Elliptical Deck */}
      <ellipse
        cx={cx}
        cy={cy - h}
        rx={rx}
        ry={ry}
        fill={topFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </g>
  );
}

export function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Reduced motion preference detection
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  // Pointer position normalized to [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery parallax movement without layout jank
  const springCfg = { damping: 28, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);

  // Multi-layered depth parallax transforms
  const pBgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const pBgY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const pMidX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const pMidY = useTransform(smoothY, [-0.5, 0.5], [-11, 11]);

  const pTowerX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const pTowerY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const pFloatX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const pFloatY = useTransform(smoothY, [-0.5, 0.5], [-19, 19]);

  const pForeX = useTransform(smoothX, [-0.5, 0.5], [-36, 36]);
  const pForeY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  // Pointer tracking relative to Hero section
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[680px] lg:max-w-none aspect-[880/580] select-none mx-auto flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Atmosphere / Radial ambient backlights */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[94%] h-[90%] rounded-full bg-gradient-to-tr from-eucalyptus/60 via-soft-green/25 to-transparent blur-3xl opacity-75 transform -translate-y-3" />
      </div>

      <svg
        viewBox="0 0 880 580"
        className="w-full h-full overflow-visible drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id={`${id}-cylGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.softGreen} />
            <stop offset="26%" stopColor={C.eucalyptus} />
            <stop offset="68%" stopColor={C.softGreen} />
            <stop offset="100%" stopColor={C.deepPine} />
          </linearGradient>

          <linearGradient id={`${id}-serverCapGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.white} />
            <stop offset="70%" stopColor={C.porcelain} />
            <stop offset="100%" stopColor={C.eucalyptus} />
          </linearGradient>

          <linearGradient id={`${id}-pineGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.pineLight} />
            <stop offset="60%" stopColor={C.deepPine} />
            <stop offset="100%" stopColor={C.pineDark} />
          </linearGradient>

          <linearGradient id={`${id}-glowBeam`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={C.softGreen} stopOpacity="0.7" />
            <stop offset="50%" stopColor={C.softGreenLight} stopOpacity="0.3" />
            <stop offset="100%" stopColor={C.softGreen} stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${id}-chartArea`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={C.softGreen} stopOpacity="0.5" />
            <stop offset="100%" stopColor={C.softGreen} stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id={`${id}-piePine`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.pineLight} />
            <stop offset="100%" stopColor={C.deepPine} />
          </linearGradient>

          <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id={`${id}-dropShadow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="6" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.14" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================================== */}
        {/* LAYER 1: CONCENTRIC AURA WAVES, BUS HIGHWAYS, & CLOUD NODE    */}
        {/* ============================================================== */}
        <motion.g
          style={isReducedMotion ? undefined : { x: pBgX, y: pBgY }}
          transition={{ type: 'spring', damping: 30 }}
        >
          {/* Concentric Ambient Ripples / Vector Flow Rings */}
          <g fill="none" stroke={C.eucalyptus} strokeWidth="1.35" strokeOpacity="0.7">
            <ellipse cx="480" cy="250" rx="195" ry="108" />
            <ellipse cx="480" cy="250" rx="275" ry="152" strokeDasharray="6 4" strokeOpacity="0.55" />
            <ellipse cx="480" cy="250" rx="360" ry="200" strokeOpacity="0.4" />
            <ellipse cx="480" cy="250" rx="445" ry="248" strokeDasharray="8 6" strokeOpacity="0.25" />
          </g>

          {/* Cloud Computing Integration Icon (Top Right: cx=785, cy=85) */}
          <g className="cursor-pointer">
            <path
              d="M 770 95 C 760 95 753 88 753 80 C 753 73 758 67 765 66 C 768 57 776 51 785 51 C 794 51 802 57 804 64 C 811 65 817 71 817 78 C 817 87 809 95 799 95 Z"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="1.35"
              filter={`url(#${id}-dropShadow)`}
            />
            {/* Cloud circuit nodes */}
            <path
              d="M 799 95 L 812 112 M 770 95 L 758 118"
              fill="none"
              stroke={C.softGreen}
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />
            <circle cx="812" cy="112" r="3" fill={C.softGreen} />
            <circle cx="758" cy="118" r="3" fill={C.deepPine} />
          </g>

          {/* Network Bus Tracks / Fiber Data Highways on Ground */}
          <g fill="none" stroke={C.softGreen} strokeWidth="1.6" strokeOpacity="0.5">
            {/* Track 1: Left Cylinder to Front Center Platform */}
            <path d="M 225,405 L 320,455 L 350,440 L 385,460" />
            {/* Track 2: Front Center Platform to Right Mainframe */}
            <path d="M 580,455 L 640,425 L 675,445 L 705,430" />
            {/* Track 3: Left Cylinder to Center Server */}
            <path d="M 220,345 L 320,295 L 400,335 L 430,320" strokeDasharray="4 3" />
            {/* Track 4: Center Server to Right Mainframe */}
            <path d="M 545,295 L 625,335 L 655,320" strokeDasharray="4 3" />
            {/* Track 5: Center Server to Front Platform */}
            <path d="M 480,325 L 480,375" strokeDasharray="3 3" />
          </g>

          {/* Bus Junction Nodes */}
          <g fill={C.white} stroke={C.deepPine} strokeWidth="1.25">
            <circle cx="320" cy="455" r="4" />
            <circle cx="320" cy="455" r="1.75" fill={C.softGreen} />

            <circle cx="640" cy="425" r="4" />
            <circle cx="640" cy="425" r="1.75" fill={C.softGreen} />

            <circle cx="320" cy="295" r="3.5" />
            <circle cx="625" cy="335" r="3.5" />
          </g>

          {/* Animated Glowing Signal Pulses traveling along tracks */}
          {!isReducedMotion && (
            <g fill={C.deepPine}>
              <motion.circle
                r="3.5"
                fill={C.softGreen}
                stroke={C.deepPine}
                strokeWidth="1"
                animate={{
                  cx: [225, 320, 350, 385],
                  cy: [405, 455, 440, 460],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.circle
                r="3.5"
                fill={C.deepPine}
                stroke={C.white}
                strokeWidth="1"
                animate={{
                  cx: [580, 640, 675, 705],
                  cy: [455, 425, 445, 430],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 0.8, ease: 'linear' }}
              />
              <motion.circle
                r="3"
                fill={C.softGreen}
                animate={{
                  cx: [220, 320, 400, 430],
                  cy: [345, 295, 335, 320],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 1.5, ease: 'linear' }}
              />
            </g>
          )}
        </motion.g>

        {/* ============================================================== */}
        {/* LAYER 2: LEFT STRUCTURE ZONE (Database Cylinder & Bar Chart)   */}
        {/* ============================================================== */}
        <motion.g
          style={isReducedMotion ? undefined : { x: pMidX, y: pMidY }}
          animate={isReducedMotion ? undefined : { y: [-2.5, 2.5, -2.5] }}
          transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        >
          {/* Ground Contact Shadow */}
          <ellipse
            cx="180"
            cy="405"
            rx="82"
            ry="44"
            fill={C.deepPine}
            fillOpacity="0.12"
            className="blur-sm"
          />

          {/* Database Base Platform */}
          <RoundedIsoPlatform
            cx={180}
            cy={395}
            rx={75}
            ry={40}
            h={16}
            topFill={C.white}
            leftBevel={C.eucalyptus}
            rightBevel={C.deepPine}
            stroke={C.borderDark}
            strokeWidth={1.35}
          />

          {/* Database Cylindrical Silo (cx=180) */}
          {/* Disc 1 (Bottom) */}
          <IsoCylinder
            cx={180}
            cy={372}
            rx={50}
            ry={25}
            h={25}
            topFill={C.porcelain}
            bodyFill={`url(#${id}-pineGrad)`}
            stroke={C.borderDark}
            strokeWidth={1.35}
          />
          {/* Glowing Status Ring on Disc 1 */}
          <ellipse
            cx="180"
            cy={356}
            rx={48}
            ry={24}
            fill="none"
            stroke={C.softGreen}
            strokeWidth="1.75"
            strokeOpacity="0.85"
          />

          {/* Disc 2 (Middle) */}
          <IsoCylinder
            cx={180}
            cy={342}
            rx={50}
            ry={25}
            h={25}
            topFill={C.eucalyptusLight}
            bodyFill={`url(#${id}-cylGrad)`}
            stroke={C.borderDark}
            strokeWidth={1.35}
          />
          {/* Status notches / LEDs on Disc 2 */}
          <rect x="162" y="324" width="9" height="5" rx="1.5" fill={C.deepPine} />
          <rect x="178" y="326" width="9" height="5" rx="1.5" fill={C.softGreen} className={!isReducedMotion ? 'animate-pulse' : ''} />
          <rect x="194" y="324" width="9" height="5" rx="1.5" fill={C.deepPine} />

          {/* Disc 3 (Top) */}
          <IsoCylinder
            cx={180}
            cy={312}
            rx={50}
            ry={25}
            h={25}
            topFill={C.white}
            bodyFill={`url(#${id}-serverCapGrad)`}
            stroke={C.borderDark}
            strokeWidth={1.35}
          />
          {/* Top Cap concentric rings & core indicator */}
          <ellipse cx="180" cy="287" rx="35" ry="17.5" fill="none" stroke={C.deepPine} strokeWidth="1.2" strokeDasharray="4 2" />
          <ellipse cx="180" cy="287" rx="18" ry="9" fill={C.eucalyptusLight} stroke={C.softGreen} strokeWidth="1.2" />
          <circle cx="180" cy="287" r="4" fill={C.deepPine} />

          {/* Floating 3D Ascending Bar Chart (Above left cylinder at cx=170, cy=185) */}
          <motion.g
            style={isReducedMotion ? undefined : { x: pFloatX, y: pFloatY }}
            animate={isReducedMotion ? undefined : { y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="cursor-pointer"
          >
            {/* Chart shadow */}
            <ellipse cx="170" cy="235" rx="64" ry="30" fill={C.deepPine} fillOpacity="0.10" className="blur-xs" />

            {/* Chart Base Plate */}
            <RoundedIsoPlatform
              cx={170}
              cy={225}
              rx={60}
              ry={28}
              h={10}
              topFill={C.white}
              leftBevel={C.eucalyptus}
              rightBevel={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1.25}
            />

            {/* Ascending 3D Bars */}
            {/* Bar 1 */}
            <IsoBox
              cx={134}
              cy={216}
              rw={9}
              rd={5}
              h={22}
              topFill={C.softGreenLight}
              leftFill={C.softGreen}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1}
            />
            {/* Bar 2 */}
            <IsoBox
              cx={152}
              cy={207}
              rw={9}
              rd={5}
              h={38}
              topFill={C.white}
              leftFill={C.softGreen}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1}
            />
            {/* Bar 3 */}
            <IsoBox
              cx={170}
              cy={198}
              rw={9}
              rd={5}
              h={56}
              topFill={C.eucalyptusLight}
              leftFill={C.eucalyptus}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1}
            />
            {/* Bar 4 */}
            <IsoBox
              cx={188}
              cy={189}
              rw={9}
              rd={5}
              h={74}
              topFill={C.softGreenLight}
              leftFill={C.softGreen}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1}
            />
            {/* Bar 5 (Peak Bar) */}
            <IsoBox
              cx={206}
              cy={180}
              rw={9}
              rd={5}
              h={94}
              topFill={C.white}
              leftFill={C.softGreen}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1.25}
            />

            {/* Trend Line Connecting Bar Peaks */}
            <path
              d="M 134,194 L 152,169 L 170,142 L 188,115 L 206,86"
              fill="none"
              stroke={C.softGreen}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="206" cy="86" r="3.5" fill={C.deepPine} stroke={C.white} strokeWidth="1.25" />
          </motion.g>

          {/* Lower-Left Mini Bar Widget (cx=175, cy=500) */}
          <g>
            <RoundedIsoPlatform
              cx={175}
              cy={505}
              rx={34}
              ry={17}
              h={7}
              topFill={C.white}
              leftBevel={C.eucalyptus}
              rightBevel={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1.1}
            />
            <IsoBox cx={160} cy={500} rw={6} rd={3.5} h={16} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={0.85} />
            <IsoBox cx={174} cy={495} rw={6} rd={3.5} h={25} topFill={C.softGreenLight} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={0.85} />
            <IsoBox cx={188} cy={490} rw={6} rd={3.5} h={35} topFill={C.white} leftFill={C.eucalyptus} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={0.85} />
          </g>

          {/* Floating Data Cubes on Left */}
          <IsoBox cx={110} cy={245} rw={14} rd={7} h={16} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
          <IsoBox cx={65} cy={355} rw={16} rd={8} h={18} topFill={C.eucalyptusLight} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
          <IsoBox cx={130} cy={450} rw={14} rd={7} h={16} topFill={C.white} leftFill={C.eucalyptus} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
        </motion.g>

        {/* ============================================================== */}
        {/* LAYER 3: CENTER-BACK MAIN SERVER TOWER (Focal Infrastructure)  */}
        {/* ============================================================== */}
        <motion.g
          style={isReducedMotion ? undefined : { x: pTowerX, y: pTowerY }}
          animate={isReducedMotion ? undefined : { y: [-3.5, 3.5, -3.5] }}
          transition={{ y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          {/* Main Server Contact Shadow */}
          <ellipse
            cx="480"
            cy="315"
            rx="118"
            ry="60"
            fill={C.deepPine}
            fillOpacity="0.16"
            className="blur-sm"
          />

          {/* Server Base Platform */}
          <RoundedIsoPlatform
            cx={480}
            cy={298}
            rx={104}
            ry={52}
            h={20}
            topFill={C.white}
            leftBevel={C.eucalyptus}
            rightBevel={C.deepPine}
            stroke={C.borderDark}
            strokeWidth={1.5}
          />

          {/* Multi-Tier Stacked Server Rack (4 Server Chassis Units) */}
          {[
            { cy: 275, h: 26, leds: [C.softGreen, C.deepPine, C.softGreen] },
            { cy: 244, h: 26, leds: [C.deepPine, C.softGreen, C.white] },
            { cy: 213, h: 26, leds: [C.softGreen, C.white, C.softGreen] },
            { cy: 182, h: 26, leds: [C.white, C.softGreen, C.deepPine] },
          ].map((tier, idx) => (
            <g key={idx} className="cursor-pointer">
              {/* Server Unit 3D Box */}
              <IsoBox
                cx={480}
                cy={tier.cy}
                rw={76}
                rd={40}
                h={tier.h}
                topFill={C.white}
                leftFill={C.eucalyptus}
                rightFill={C.deepPine}
                stroke={C.borderDark}
                strokeWidth={1.35}
              />

              {/* Left Face Horizontal Server Slots & Vents */}
              <line x1="416" y1={tier.cy - 14} x2="470" y2={tier.cy + 15} stroke={C.deepPine} strokeWidth="1.2" strokeOpacity="0.45" />
              <line x1="416" y1={tier.cy - 7} x2="470" y2={tier.cy + 22} stroke={C.deepPine} strokeWidth="1.2" strokeOpacity="0.45" />

              {/* Right Face Rack Module Slots & Activity LEDs */}
              <line x1="492" y1={tier.cy + 16} x2="546" y2={tier.cy - 12} stroke={C.eucalyptus} strokeWidth="1.2" strokeOpacity="0.55" />
              <line x1="492" y1={tier.cy + 23} x2="546" y2={tier.cy - 5} stroke={C.eucalyptus} strokeWidth="1.2" strokeOpacity="0.55" />

              {/* LED Cluster on Right Face */}
              <circle cx="503" cy={tier.cy + 7} r="2.5" fill={tier.leds[0]} />
              <circle cx="512" cy={tier.cy + 3} r="2.5" fill={tier.leds[1]} className={!isReducedMotion ? 'animate-pulse' : ''} />
              <circle cx="521" cy={tier.cy - 1} r="2.5" fill={tier.leds[2]} />

              {/* Server Chassis Handle Bracket on Right */}
              <rect x="540" y={tier.cy - 15} width="3.5" height="13" rx="1.5" fill={C.eucalyptus} stroke={C.deepPine} strokeWidth="0.6" />
            </g>
          ))}

          {/* Top Emitter Pad & Portal (On top of 4th server tier) */}
          <ellipse
            cx="480"
            cy="142"
            rx="52"
            ry="27"
            fill={C.softGreen}
            fillOpacity="0.35"
            stroke={C.softGreen}
            strokeWidth="2.2"
            filter={`url(#${id}-glow)`}
          />
          <ellipse
            cx="480"
            cy="142"
            rx="32"
            ry="16"
            fill={C.white}
            stroke={C.deepPine}
            strokeWidth="1.35"
          />

          {/* Vertical Portal Energy Beam */}
          <polygon
            points="460,142 500,142 514,25 446,25"
            fill={`url(#${id}-glowBeam)`}
          />

          {/* Rising Column of Floating Glowing Isometric Data Cubes */}
          <g>
            {/* Cube 1 (Closest to Emitter) */}
            <motion.g
              animate={isReducedMotion ? undefined : { y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <IsoBox cx={480} cy={118} rw={18} rd={9} h={20} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
            </motion.g>

            {/* Cube 2 (Mid-Elevation) */}
            <motion.g
              animate={isReducedMotion ? undefined : { y: [-5, 5, -5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <IsoBox cx={505} cy={82} rw={16} rd={8} h={18} topFill={C.softGreenLight} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
            </motion.g>

            {/* Cube 3 (Upper Elevation) */}
            <motion.g
              animate={isReducedMotion ? undefined : { y: [-4, 4, -4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <IsoBox cx={465} cy={50} rw={14} rd={7} h={16} topFill={C.white} leftFill={C.eucalyptus} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
            </motion.g>

            {/* Cube 4 (Peak Elevation) */}
            <motion.g
              animate={isReducedMotion ? undefined : { y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <IsoBox cx={485} cy={22} rw={13} rd={6.5} h={14} topFill={C.softGreen} leftFill={C.softGreenLight} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
            </motion.g>
          </g>
        </motion.g>

        {/* ============================================================== */}
        {/* LAYER 4: RIGHT ZONE (Mainframe Tower, Screen, Plant, Donut)    */}
        {/* ============================================================== */}
        <motion.g
          style={isReducedMotion ? undefined : { x: pMidX, y: pMidY }}
          animate={isReducedMotion ? undefined : { y: [-2, 2, -2] }}
          transition={{ y: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } }}
        >
          {/* Mainframe Contact Shadow */}
          <ellipse
            cx="715"
            cy="398"
            rx="92"
            ry="48"
            fill={C.deepPine}
            fillOpacity="0.12"
            className="blur-sm"
          />

          {/* Mainframe Base Platform */}
          <RoundedIsoPlatform
            cx={715}
            cy={386}
            rx={82}
            ry={43}
            h={16}
            topFill={C.white}
            leftBevel={C.eucalyptus}
            rightBevel={C.deepPine}
            stroke={C.borderDark}
            strokeWidth={1.35}
          />

          {/* High-Rise Server Mainframe Tower (cx=715, cy=330) */}
          <g className="cursor-pointer">
            <IsoBox
              cx={715}
              cy={330}
              rw={52}
              rd={27}
              h={128}
              topFill={C.white}
              leftFill={C.eucalyptus}
              rightFill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth={1.5}
            />

            {/* Left Facade Vertical Seams */}
            {[-28, -10, 8].map((offset) => (
              <line
                key={offset}
                x1={715 + offset}
                y1={330 - 128 + (offset * 27) / 52}
                x2={715 + offset}
                y2={330 + (offset * 27) / 52}
                stroke={C.deepPine}
                strokeWidth="0.85"
                strokeOpacity="0.4"
              />
            ))}

            {/* Right Facade: 3 Columns x 6 Rows Matrix of Glowing Drive Bay Modules */}
            {[0, 1, 2, 3, 4, 5].map((rowIdx) => {
              const yBase = 330 - 116 + rowIdx * 19;
              return [0, 1, 2].map((colIdx) => {
                const xPos = 724 + colIdx * 13;
                const yPos = yBase + colIdx * 6.5;
                const isLit = (rowIdx + colIdx) % 3 === 0;
                const isSoft = (rowIdx + colIdx) % 2 === 0;
                const fillCol = isLit ? C.softGreen : isSoft ? C.white : C.pineDark;

                return (
                  <rect
                    key={`${rowIdx}-${colIdx}`}
                    x={xPos}
                    y={yPos}
                    width="8.5"
                    height="12"
                    rx="1.5"
                    fill={fillCol}
                    stroke={C.deepPine}
                    strokeWidth="0.6"
                    className={isLit && !isReducedMotion ? 'animate-pulse' : ''}
                    style={{ animationDuration: `${1.5 + ((rowIdx * 3 + colIdx) % 4) * 0.4}s` }}
                  />
                );
              });
            })}
          </g>

          {/* Modern Ceramic Planter with Potted Botanical Foliage (Right of Building at cx=785, cy=445) */}
          <g>
            {/* Pot shadow */}
            <ellipse cx="785" cy="460" rx="20" ry="10" fill={C.deepPine} fillOpacity="0.14" />

            {/* Ceramic Pot Body */}
            <IsoCylinder
              cx={785}
              cy={452}
              rx={18}
              ry={9}
              h={22}
              topFill={C.darkCharcoal}
              bodyFill={`url(#${id}-serverCapGrad)`}
              stroke={C.borderDark}
              strokeWidth={1.35}
            />

            {/* Botanical Foliage / Succulent Leaves in Deep Pine & Soft Green */}
            <g stroke={C.deepPine} strokeWidth="1.2" strokeLinejoin="round">
              {/* Leaf 1 (Left arching) */}
              <path d="M 785 430 C 773 420 762 410 755 392 C 765 400 776 412 785 430 Z" fill={C.deepPine} />
              {/* Leaf 2 (Center tall) */}
              <path d="M 785 430 C 781 410 783 392 785 380 C 789 392 791 410 785 430 Z" fill={C.softGreen} />
              {/* Leaf 3 (Right arching) */}
              <path d="M 785 430 C 797 418 808 408 816 394 C 807 404 796 416 785 430 Z" fill={C.deepPine} />
              {/* Leaf 4 (Front-left small) */}
              <path d="M 785 430 C 774 427 768 423 765 415 C 772 419 779 423 785 430 Z" fill={C.softGreen} />
              {/* Leaf 5 (Front-right small) */}
              <path d="M 785 430 C 796 427 802 423 805 415 C 798 419 791 423 785 430 Z" fill={C.eucalyptus} />
            </g>
          </g>

          {/* Large Floating Analytics Dashboard Screen (Above Building at cx=730, cy=130) */}
          <motion.g
            style={isReducedMotion ? undefined : { x: pFloatX, y: pFloatY }}
            animate={isReducedMotion ? undefined : { y: [-6, 6, -6] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="cursor-pointer"
          >
            {/* Screen Drop Shadow */}
            <rect
              x="650"
              y="80"
              width="160"
              height="105"
              rx="11"
              fill={C.deepPine}
              fillOpacity="0.12"
              className="blur-xs"
              transform="rotate(-2 730 132)"
            />

            {/* Dashboard Card Container */}
            <g transform="rotate(-2 730 132)">
              {/* Screen Baseplate */}
              <rect
                x="650"
                y="80"
                width="160"
                height="105"
                rx="11"
                fill={C.white}
                stroke={C.borderDark}
                strokeWidth="1.5"
              />

              {/* Window Header Bar */}
              <rect
                x="650"
                y="80"
                width="160"
                height="24"
                rx="11"
                fill={C.eucalyptusLight}
              />
              {/* 3 Window Control Dots */}
              <circle cx="664" cy="92" r="3.5" fill={C.deepPine} />
              <circle cx="673" cy="92" r="3.5" fill={C.softGreen} />
              <circle cx="682" cy="92" r="3.5" fill={C.white} stroke={C.deepPine} strokeWidth="0.8" />

              <text
                x="698"
                y="95"
                fill={C.deepPine}
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="700"
              >
                TELEMETRY // LIVE
              </text>

              {/* Chart Grid Lines */}
              <g stroke={C.deepPine} strokeWidth="0.5" strokeOpacity="0.16">
                <line x1="662" y1="124" x2="798" y2="124" />
                <line x1="662" y1="146" x2="798" y2="146" />
                <line x1="662" y1="168" x2="798" y2="168" />
              </g>

              {/* Area Chart Gradient Fill */}
              <path
                d="M 662 168 L 678 140 L 700 154 L 722 126 L 744 138 L 766 118 L 788 130 L 798 114 L 798 168 Z"
                fill={`url(#${id}-chartArea)`}
              />

              {/* Main Trend Wave Curve */}
              <path
                d="M 662 168 L 678 140 L 700 154 L 722 126 L 744 138 L 766 118 L 788 130 L 798 114"
                fill="none"
                stroke={C.deepPine}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Peak Data Nodes */}
              <circle cx="722" cy="126" r="3.5" fill={C.softGreen} stroke={C.white} strokeWidth="1.2" />
              <circle cx="766" cy="118" r="3.5" fill={C.deepPine} stroke={C.white} strokeWidth="1.2" />
              <circle cx="798" cy="114" r="3.5" fill={C.softGreen} stroke={C.white} strokeWidth="1.2" />
            </g>
          </motion.g>

          {/* Floating 3D Segmented Donut Ring (Mid-Right at cx=685, cy=405) */}
          <motion.g
            animate={isReducedMotion ? undefined : { y: [4.5, -4.5, 4.5], rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transformOrigin: '685px 405px' }}
            className="cursor-pointer"
          >
            {/* Donut shadow */}
            <ellipse cx="685" cy="428" rx="40" ry="20" fill={C.deepPine} fillOpacity="0.10" />

            {/* Donut Extruded 3D Ring */}
            <path
              d="M 646 405 A 39 20 0 0 0 724 405 v 14 A 39 20 0 0 1 646 419 Z"
              fill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth="1.2"
            />
            {/* Donut Top Face */}
            <ellipse cx="685" cy="405" rx="39" ry="20" fill={C.white} stroke={C.borderDark} strokeWidth="1.35" />

            {/* Slices */}
            <path d="M 685 405 L 724 405 A 39 20 0 0 1 663 420 Z" fill={C.deepPine} />
            <path d="M 685 405 L 663 420 A 39 20 0 0 1 651 397 Z" fill={C.softGreen} />
            <path d="M 685 405 L 651 397 A 39 20 0 0 1 685 385 Z" fill={C.eucalyptus} />

            {/* Hollow Donut Core */}
            <ellipse cx="685" cy="405" rx="18" ry="9" fill={C.porcelain} stroke={C.borderDark} strokeWidth="1.2" />
          </motion.g>

          {/* Floating Data Cubes on Right */}
          <IsoBox cx={795} cy={270} rw={14} rd={7} h={16} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
          <IsoBox cx={795} cy={305} rw={14} rd={7} h={16} topFill={C.eucalyptusLight} leftFill={C.eucalyptus} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
          <IsoBox cx={655} cy={490} rw={16} rd={8} h={18} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
        </motion.g>

        {/* ============================================================== */}
        {/* LAYER 5: FRONT PLATFORM, DATA ANALYST & 3D PIE CHART (Key HUD) */}
        {/* ============================================================== */}
        <motion.g
          style={isReducedMotion ? undefined : { x: pForeX, y: pForeY }}
          animate={isReducedMotion ? undefined : { y: [-2, 2, -2] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          {/* Deck Contact Shadow */}
          <ellipse
            cx="460"
            cy="470"
            rx="145"
            ry="72"
            fill={C.deepPine}
            fillOpacity="0.18"
            className="blur-sm"
          />

          {/* Large Rounded Isometric Analytics Deck */}
          <RoundedIsoPlatform
            cx={460}
            cy={452}
            rx={135}
            ry={67}
            h={22}
            topFill={C.white}
            leftBevel={C.eucalyptus}
            rightBevel={C.deepPine}
            stroke={C.borderDark}
            strokeWidth={1.6}
          />
          {/* Deck Surface Circuit Inlays */}
          <ellipse
            cx="460"
            cy={430}
            rx={120}
            ry={60}
            fill="none"
            stroke={C.softGreen}
            strokeWidth="0.85"
            strokeOpacity="0.65"
          />

          {/* ------------------------------------------------------------ */}
          {/* 3D ISOMETRIC PIE CHART ON PLATFORM DECK (cx=525, cy=435)     */}
          {/* ------------------------------------------------------------ */}
          <g className="cursor-pointer">
            {/* Pie Chart Shadow */}
            <ellipse cx="530" cy="452" rx="54" ry="28" fill={C.deepPine} fillOpacity="0.14" />

            {/* 3D Extruded Pie Cylindrical Base Slices */}
            {/* Slice 1: Deep Pine 3D Extruded Body (Front-Right Wedge, ~55%) */}
            <path
              d="M 478 432 A 52 26 0 0 0 582 432 v 18 A 52 26 0 0 1 478 450 Z"
              fill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth="1.35"
              strokeLinejoin="round"
            />
            {/* Slice 2: Soft Green 3D Extruded Body (Front-Left Wedge, ~25%) */}
            <path
              d="M 477 432 A 52 26 0 0 0 530 458 v 18 A 52 26 0 0 1 477 450 Z"
              fill={C.softGreen}
              stroke={C.borderDark}
              strokeWidth="1.35"
              strokeLinejoin="round"
            />

            {/* Top Pie Faces */}
            {/* Deep Pine Wedge Top */}
            <path
              d="M 530 432 L 582 432 A 52 26 0 0 1 502 453 Z"
              fill={`url(#${id}-piePine)`}
              stroke={C.borderDark}
              strokeWidth="1.2"
            />
            {/* Soft Green Wedge Top */}
            <path
              d="M 530 432 L 502 453 A 52 26 0 0 1 480 422 Z"
              fill={C.softGreen}
              stroke={C.borderDark}
              strokeWidth="1.2"
            />
            {/* Eucalyptus Wedge Top */}
            <path
              d="M 530 432 L 480 422 A 52 26 0 0 1 530 406 Z"
              fill={C.eucalyptus}
              stroke={C.borderDark}
              strokeWidth="1.2"
            />
            {/* White Accent Wedge Top */}
            <path
              d="M 530 432 L 530 406 A 52 26 0 0 1 582 432 Z"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="1.2"
            />

            {/* Slice Separation Seam Lines */}
            <line x1="530" y1="432" x2="582" y2="432" stroke={C.borderDark} strokeWidth="1.2" />
            <line x1="530" y1="432" x2="502" y2="453" stroke={C.borderDark} strokeWidth="1.2" />
            <line x1="530" y1="432" x2="480" y2="422" stroke={C.borderDark} strokeWidth="1.2" />
            <line x1="530" y1="432" x2="530" y2="406" stroke={C.borderDark} strokeWidth="1.2" />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* FLOATING VERTICAL DASHBOARD PANEL (Behind Analyst & Pie)     */}
          {/* ------------------------------------------------------------ */}
          <g className="cursor-pointer">
            {/* Panel Shadow */}
            <rect
              x="500"
              y="312"
              width="98"
              height="72"
              rx="7"
              fill={C.deepPine}
              fillOpacity="0.12"
              className="blur-xs"
            />
            {/* Panel Surface */}
            <rect
              x="500"
              y="312"
              width="98"
              height="72"
              rx="7"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="1.35"
            />
            {/* Panel Header */}
            <rect x="500" y="312" width="98" height="16" rx="7" fill={C.eucalyptusLight} />
            <circle cx="509" cy="320" r="2.5" fill={C.softGreen} />
            <text x="516" y="323" fill={C.deepPine} fontSize="6.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
              INSIGHT METRICS
            </text>

            {/* Mini Bar Cluster in Dashboard */}
            <rect x="509" y="354" width="6" height="18" rx="1" fill={C.softGreen} />
            <rect x="518" y="342" width="6" height="30" rx="1" fill={C.deepPine} />
            <rect x="527" y="349" width="6" height="23" rx="1" fill={C.eucalyptusDark} />
            <rect x="536" y="338" width="6" height="34" rx="1" fill={C.softGreen} />

            {/* Mini Donut in Dashboard */}
            <ellipse cx="568" cy="354" rx="16" ry="10" fill={C.white} stroke={C.deepPine} strokeWidth="1.2" />
            <path d="M 568 354 L 584 354 A 16 10 0 0 1 559 363 Z" fill={C.deepPine} />
            <ellipse cx="568" cy="354" rx="8" ry="5" fill={C.white} stroke={C.deepPine} strokeWidth="0.85" />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* HUMAN CHARACTER: PROFESSIONAL DATA ANALYST (cx=395, cy=425)  */}
          {/* Scaled naturally, clear posture, stylish collared shirt      */}
          {/* ------------------------------------------------------------ */}
          <g className="cursor-pointer group">
            {/* Character Contact Foot Shadows on White Deck */}
            <ellipse cx="388" cy="445" rx="8.5" ry="4.5" fill={C.deepPine} fillOpacity="0.25" />
            <ellipse cx="404" cy="448" rx="8.5" ry="4.5" fill={C.deepPine} fillOpacity="0.25" />

            {/* Shoes */}
            {/* Left Shoe */}
            <path
              d="M 382 443 L 394 448 L 391 451 L 379 446 Z"
              fill={C.pineDeepest}
              stroke={C.borderDark}
              strokeWidth="0.85"
              strokeLinejoin="round"
            />
            {/* Right Shoe */}
            <path
              d="M 398 445 L 410 450 L 407 453 L 395 448 Z"
              fill={C.pineDeepest}
              stroke={C.borderDark}
              strokeWidth="0.85"
              strokeLinejoin="round"
            />

            {/* Trousers / Legs (Tailored Deep Pine Pants) */}
            {/* Left Leg */}
            <path
              d="M 383 412 L 393 412 L 392 444 L 383 442 Z"
              fill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth="0.85"
              strokeLinejoin="round"
            />
            {/* Right Leg */}
            <path
              d="M 395 412 L 405 412 L 408 446 L 399 444 Z"
              fill={C.pineDark}
              stroke={C.borderDark}
              strokeWidth="0.85"
              strokeLinejoin="round"
            />
            {/* Pelvis / Waistband */}
            <path
              d="M 383 410 L 405 410 L 406 418 L 382 418 Z"
              fill={C.deepPine}
              stroke={C.borderDark}
              strokeWidth="0.85"
            />

            {/* Torso / Crisp White Collared Shirt */}
            <path
              d="M 383 372 L 407 372 L 405 412 L 383 412 Z"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            {/* Shirt Shading Fold on Left */}
            <path
              d="M 383 372 L 390 372 L 388 412 L 383 412 Z"
              fill={C.eucalyptusLight}
            />

            {/* Left Arm (Holding Tablet) */}
            <path
              d="M 383 375 L 376 392 L 395 397 L 398 391 L 386 387 Z"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            {/* Left Hand */}
            <circle cx="395" cy="396" r="3.5" fill={C.skin} stroke={C.borderDark} strokeWidth="0.8" />

            {/* Digital Tablet / Clipboard */}
            <g transform="rotate(-15 408 392)">
              {/* Tablet Body */}
              <rect
                x="398"
                y="382"
                width="19"
                height="14"
                rx="2"
                fill={C.white}
                stroke={C.borderDark}
                strokeWidth="0.9"
              />
              {/* Glowing Screen */}
              <rect x="400" y="384" width="15" height="10" rx="1" fill={C.softGreen} />
              {/* Mini data line on tablet */}
              <line x1="402" y1="388" x2="412" y2="388" stroke={C.deepPine} strokeWidth="0.85" />
              <line x1="402" y1="391" x2="409" y2="391" stroke={C.white} strokeWidth="0.85" />
            </g>

            {/* Right Arm (Reaching towards Tablet Screen) */}
            <path
              d="M 406 375 L 412 390 L 408 396 L 402 392 L 405 380 Z"
              fill={C.white}
              stroke={C.borderDark}
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            {/* Right Hand */}
            <circle cx="408" cy="395" r="3.2" fill={C.skin} stroke={C.borderDark} strokeWidth="0.8" />

            {/* Neck & Shirt Collar */}
            <path
              d="M 391 367 L 399 367 L 398 373 L 392 373 Z"
              fill={C.skin}
              stroke={C.borderDark}
              strokeWidth="0.85"
            />
            <polygon points="390,372 395,376 400,372" fill={C.white} stroke={C.borderDark} strokeWidth="0.85" />

            {/* Head & Hair */}
            {/* Head Base */}
            <ellipse cx="395" cy="360" rx="7.5" ry="9" fill={C.skin} stroke={C.borderDark} strokeWidth="0.9" />
            {/* Stylish Deep Pine Hair (3/4 angle viewed from back-left) */}
            <path
              d="M 388 360 C 387 351 391 347 398 347 C 404 347 406 352 405 360 C 402 355 396 354 391 356 Z"
              fill={C.pineDeepest}
              stroke={C.borderDark}
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
          </g>

          {/* Foreground Data Cube Accents */}
          <IsoBox cx={345} cy={480} rw={16} rd={8} h={18} topFill={C.white} leftFill={C.softGreen} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
          <IsoBox cx={590} cy={490} rw={18} rd={9} h={20} topFill={C.eucalyptusLight} leftFill={C.eucalyptus} rightFill={C.deepPine} stroke={C.borderDark} strokeWidth={1.1} />
        </motion.g>
      </svg>
    </div>
  );
}

export default HeroIllustration;

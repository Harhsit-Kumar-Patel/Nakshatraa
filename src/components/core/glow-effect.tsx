'use client';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?:
    | 'rotate'
    | 'pulse'
    | 'breathe'
    | 'colorShift'
    | 'flowHorizontal'
    | 'static';
  blur?:
    | number
    | 'softest'
    | 'soft'
    | 'medium'
    | 'strong'
    | 'stronger'
    | 'strongest'
    | 'none';
  transition?: Transition;
  scale?: number;
  duration?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: duration,
    ease: 'linear',
  };

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    pulse: {
      scale: [1, scale * 1.05, 1],
      opacity: [0.5, 1, 0.5],
      background: `radial-gradient(circle, ${colors.join(', ')})`,
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    breathe: {
      scale: [1, scale * 1.03, 1],
      opacity: [0.6, 0.9, 0.6],
      background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    colorShift: {
      background: colors.map((_, index) => {
        const shiftedColors = [...colors.slice(index), ...colors.slice(0, index)];
        return `conic-gradient(from 0deg at 50% 50%, ${shiftedColors.join(', ')})`;
      }),
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    flowHorizontal: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      backgroundSize: '200% 200%',
      background: `linear-gradient(90deg, ${colors.join(', ')})`,
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    static: {
      background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
    },
  };

  const blurMap = {
    none: '0px',
    softest: '2px',
    soft: '4px',
    medium: '8px',
    strong: '16px',
    stronger: '32px',
    strongest: '64px',
  };
  const blurValue = typeof blur === 'string' ? blurMap[blur] || '8px' : `${blur}px`;

  return (
    <motion.div
      className={cn('absolute inset-0 pointer-events-none z-0', className)}
      style={{
        filter: `blur(${blurValue})`,
        scale: scale,
        ...style,
      }}
      animate={animations[mode] as any}
    />
  );
}

'use client';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variant, Transition, UseInViewOptions } from 'framer-motion';

export type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
  once?: boolean;
  className?: string;
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once = false,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: once,
    ...viewOptions,
  });

  const MotionComponent = (motion as any)[as as any] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </MotionComponent>
  );
}

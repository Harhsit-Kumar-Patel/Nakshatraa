'use client';
import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  },
  rotate: {
    hidden: { opacity: 0, rotate: 180 },
    visible: { opacity: 1, rotate: 0 },
  },
  swing: {
    hidden: { opacity: 0, rotate: 15 },
    visible: { opacity: 1, rotate: 0 },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
  preset = 'fade',
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || presetVariants[preset] || defaultItemVariants;

  const MotionContainer = (motion as any)[as as any] || motion.div;
  const MotionItem = (motion as any)[asChild as any] || motion.div;

  const childrenArray = React.Children.toArray(children);

  return (
    <MotionContainer
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {childrenArray.map((child, index) => (
        <MotionItem key={index} variants={itemVariants}>
          {child}
        </MotionItem>
      ))}
    </MotionContainer>
  );
}

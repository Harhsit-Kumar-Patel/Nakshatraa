'use client';
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel');
  }
  return context;
}

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

export function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const setIndex = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= itemsCount) return;
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselContext.Provider
      value={{
        index: currentIndex,
        setIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
      }}
    >
      <div className={cn('relative w-full overflow-hidden', className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
};

export function CarouselContent({ children, className }: CarouselContentProps) {
  const { index, setItemsCount } = useCarousel();
  const childrenArray = Children.toArray(children);

  useEffect(() => {
    setItemsCount(childrenArray.length);
  }, [childrenArray.length, setItemsCount]);

  return (
    <motion.div
      className={cn('flex w-full', className)}
      animate={{ x: `-${index * 100}%` }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div className={cn('w-full shrink-0 select-none', className)}>
      {children}
    </div>
  );
}

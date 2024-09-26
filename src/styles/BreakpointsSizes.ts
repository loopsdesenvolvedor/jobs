export const BreakpointsSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

interface SizesProps {
  sizes: number;
}

export const breakAt = ({ sizes }: SizesProps) =>
  `@media (min-width: ${sizes}px)`;

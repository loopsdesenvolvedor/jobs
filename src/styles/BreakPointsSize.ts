export const BreakpointsSize = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakAt = (size: number) => `@media (min-width:${size}px)`;

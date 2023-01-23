const getMedia = (width: number) => `@media(min-width: ${width}px)`;

export const breakpoint = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

export const media = {
  xs: getMedia(breakpoint.xs),
  sm: getMedia(breakpoint.sm),
  md: getMedia(breakpoint.md),
  lg: getMedia(breakpoint.lg),
  xl: getMedia(breakpoint.xl),
};

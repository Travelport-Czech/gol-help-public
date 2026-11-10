export {};

declare global {
  interface Window {
    zE?: (...args: unknown[]) => void;
  }
}

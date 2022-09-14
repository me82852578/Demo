export {};

declare global {
  interface Window {
    CDP: any; // 👈️ turn off type checking
  }
}

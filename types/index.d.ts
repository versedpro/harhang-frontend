export {};

declare global {
  interface Window {
    Microsoft: any;
  }

  interface Blob {
    name: string;
  }
}

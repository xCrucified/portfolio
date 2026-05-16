declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const content: string;
  export default content;
}
declare global {
  interface Window {
    myCustomVar: string;
  }
}

export {};

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    DATABASE_URL: string;
  }
}

import type { ReactNode } from "react";

declare global {
  type Children = ReactNode;
}
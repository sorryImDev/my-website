declare module 'locomotive-scroll' {
    export interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth?: boolean;
      getDirection?: boolean;
      getSpeed?: boolean;
      resetNativeScroll?: boolean;
      smartphone?: {
        smooth?: boolean;
      };
      tablet?: {
        smooth?: boolean;
      };
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: (args: any) => void): void;
      destroy(): void;
      update(): void;
    }
  }
  
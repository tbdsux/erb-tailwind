declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        on(channel: string, func: (...args: unknown[]) => void): void;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};

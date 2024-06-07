import create from "zustand";

interface MobileState {
  isMobile: boolean;
  sizeW: number;
}

const useStore = create<MobileState>(() => ({
  isMobile: window.innerWidth < 1000,
  sizeW: Number(window.innerWidth)
}))

export default useStore;
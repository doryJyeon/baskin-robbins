import create from "zustand";

interface MobileState {
  isMobile: boolean;
  sizeW: number;
  checkIsMobile: (check: boolean) => void;
}

const useMobileStore = create<MobileState>((set) => ({
  isMobile: window.innerWidth < 1000,
  sizeW: Number(window.innerWidth),
  checkIsMobile: (check: boolean) => set({ isMobile: check })
}))

export default useMobileStore;
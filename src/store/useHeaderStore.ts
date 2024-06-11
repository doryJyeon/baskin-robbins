import create from "zustand";

interface HeaderState {
  isRoot: boolean;
  bgColored: boolean;
  searching: boolean;
  hoverMenu: [boolean, string];
  headerShow: string;  // 모바일에서만 show / hide
  mobileMenu: boolean;
  checkBgColored: (color?: boolean) => void;
  checkSearching: (search: boolean) => void;
  checkHoverMenu: (menu: string) => void;
  checkHeaderShow: (show: boolean) => void;
  checkMobileMenu: (menu: boolean) => void;
}

const useHeaderStore = create<HeaderState>((set, get) => ({
  isRoot: location.pathname === '/',
  bgColored: true,
  searching: false,
  hoverMenu: [false, ""],
  headerShow: "show",
  mobileMenu: false,
  checkBgColored: (color?: boolean) => {
    if (color !== undefined) {
      set({ bgColored: color })
    } else {
      (get().isRoot && window.pageYOffset < 30) ? set({ bgColored: false }) : set({ bgColored: true })
    }
  },
  checkSearching: (search: boolean) => set({
    searching: search
  }),
  checkHoverMenu: (menu: string) => set({
    hoverMenu: [
      menu ? true : false,
      menu
    ]
  }),
  checkHeaderShow: (show: boolean) => set({
    headerShow: show ? "show" : "hide"
  }),
  checkMobileMenu: (menu: boolean) => set({
    mobileMenu: menu
  })
}));

export default useHeaderStore;
import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  setSidebarOpen: (val: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (val) => set({ sidebarOpen: val }),
}))

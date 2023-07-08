import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const store = create(
  persist(
    (set: any) => ({
      menu: true,
      setMenu: (value: boolean) => set({ menu: value }),
    }),
    { name: 'storage' }
  )
);

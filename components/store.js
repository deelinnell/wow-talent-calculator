import { create } from "zustand";

const useTotalStore = create((set) => ({
    total1: 0,
    total2: 0,
    total3: 0,
    totalAll: 0,
    addTotal: () => set((state) => ({ totalAll: state.total1 + state.total2 + state.total3 })),
    increase1: () => set((state) => ({ total1: state.total1 + 1 })),
    decrease1: () => set((state) => ({ total1: state.total1 - 1 })),
    remove1: () => set({ total1: 0 }),
    increase2: () => set((state) => ({ total2: state.total2 + 1 })),
    decrease2: () => set((state) => ({ total2: state.total2 - 1 })),
    remove2: () => set({ total2: 0 }),
    increase3: () => set((state) => ({ total3: state.total3 + 1 })),
    decrease3: () => set((state) => ({ total3: state.total3 - 1 })),
    remove3: () => set({ total3: 0 }),

    removeTotal: (arg) => set((state) => ({}))
}));

export default useTotalStore;
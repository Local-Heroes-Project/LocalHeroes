import { create } from "zustand";

export const useListingsStore = create((set) => ({

    listings: [],
    status: "loading", // "loading" |  "success" | "error"

    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
    toggleDark: () => set((state) => ({darkMode: !state.darkMode})),
    

    




    loadHeroes: async () => {
        set({ status: "loading"})
        try {
            const res = await fetch(
                "https://localheroes.vercel.app/api/heroes"
            );
            const data = await res.json();
            console.log(data, "test")
            
            set({ listings: data, status: "success"})
        } catch {
            set({status: "error"})
        }
    }



}))




// {
//     "full_name": "sharma",
//     "story": "sharma is singer",
//     "location": "toronto",
//     "tags": ["Singer"],
//     "photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgunOphfdZM3Y_gIdQ4G-w-EfYJAz_6isQUdpvTXxRQ&s=10"
//   }
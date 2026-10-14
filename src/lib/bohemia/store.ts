import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  seedMusicians,
  seedShows,
  seedSongs,
  type Inquiry,
  type InquiryStatus,
  type Musician,
  type Show,
  type Song,
} from "./content";

type BohemiaState = {
  shows: Show[];
  musicians: Musician[];
  songs: Song[];
  inquiries: Inquiry[];
  addShow: (show: Omit<Show, "id">) => void;
  updateShow: (id: string, patch: Partial<Omit<Show, "id">>) => void;
  removeShow: (id: string) => void;
  updateMusician: (id: string, patch: Partial<Omit<Musician, "id">>) => void;
  addSong: (song: Omit<Song, "id">) => void;
  removeSong: (id: string) => void;
  addInquiry: (input: Omit<Inquiry, "id" | "createdAt" | "status">) => void;
  setInquiryStatus: (id: string, status: InquiryStatus) => void;
  removeInquiry: (id: string) => void;
  reset: () => void;
};

const fresh = () => ({
  shows: seedShows,
  musicians: seedMusicians,
  songs: seedSongs,
  inquiries: [] as Inquiry[],
});

export const useBohemia = create<BohemiaState>()(
  persist(
    (set) => ({
      ...fresh(),
      addShow: (show) =>
        set((s) => ({ shows: [...s.shows, { ...show, id: crypto.randomUUID() }] })),
      updateShow: (id, patch) =>
        set((s) => ({
          shows: s.shows.map((item) => (item.id === id ? { ...item, ...patch } : item)),
        })),
      removeShow: (id) => set((s) => ({ shows: s.shows.filter((item) => item.id !== id) })),
      updateMusician: (id, patch) =>
        set((s) => ({
          musicians: s.musicians.map((item) => (item.id === id ? { ...item, ...patch } : item)),
        })),
      addSong: (song) =>
        set((s) => ({ songs: [...s.songs, { ...song, id: crypto.randomUUID() }] })),
      removeSong: (id) => set((s) => ({ songs: s.songs.filter((item) => item.id !== id) })),
      addInquiry: (input) =>
        set((s) => ({
          inquiries: [
            {
              ...input,
              id: crypto.randomUUID(),
              status: "nueva",
              createdAt: new Date().toISOString(),
            },
            ...s.inquiries,
          ],
        })),
      setInquiryStatus: (id, status) =>
        set((s) => ({
          inquiries: s.inquiries.map((item) => (item.id === id ? { ...item, status } : item)),
        })),
      removeInquiry: (id) =>
        set((s) => ({ inquiries: s.inquiries.filter((item) => item.id !== id) })),
      reset: () => set(fresh()),
    }),
    {
      name: "bohemia-aire-v1",
      skipHydration: true,
    },
  ),
);

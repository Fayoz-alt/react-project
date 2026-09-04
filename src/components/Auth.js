import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useAuth = create()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      setAccessToken: (token) =>
        set((status) => ({ ...status, accessToken: token })),
      setUser: (user) => set((status) => ({ ...status, user: user })),
    }),
    {
      name: `auth`,
    },
  ),
);

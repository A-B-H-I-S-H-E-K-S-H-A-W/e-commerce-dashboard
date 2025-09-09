import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useAuthStore = create(
  persist(
    (set) => (
      {
        admin: null,
        token: null,
        loading: false,
        error: null,
        login: async (formData) => {
          try {
            set({ loading: true });
            const res = await axios.post("/api/admin/login", formData);
            if (res.data.success) {
              set({
                admin: res.data.admin,
                token: res.data.token,
                loading: false,
              });
            }
          } catch (error) {
            console.error("Login failed:", error);
            set({
              error: error.response?.data?.message || "Login failed",
              loading: false,
            });
            throw error;
          }
        },
      },
      {
        name: "adminAuth",
        partialize: (state) => ({
          admin: state.admin,
          token: state.token,
        }),
      }
    )
  )
);

export default useAuthStore;

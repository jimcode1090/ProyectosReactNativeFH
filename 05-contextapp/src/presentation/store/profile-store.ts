import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string;

    changeProfile : (name: string, email: string) => void;

}


export const useProfileStore = create<ProfileState>()((set, get) => ({
    name: "Jimmy Niels",
    email: "Paytan Villavicencio",
    changeProfile: (name: string, email: string) => set({name, email})
}))
import { atom } from "recoil";

export const authModalState = atom({
    key: "authModalState",
    default: "login", // default view is "login"
});
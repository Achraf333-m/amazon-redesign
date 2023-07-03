import { Prod } from "@/types";
import { atom } from "recoil";

export const bookState = atom({
  key: "bookState",
  default: "",
});

export const makeUpState = atom({
  key: "makeUpState",
  default: "foundation",
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const productState = atom<Prod | null>({
  key: 'productState',
  default: null
});

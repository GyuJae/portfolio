import { atom } from "recoil";

export const selectProjectState = atom<number | null>({
  key: "selectProject",
  default: null,
});

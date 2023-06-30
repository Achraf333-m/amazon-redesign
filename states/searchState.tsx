import { atom } from "recoil";

export const bookState = atom({
    key: 'bookState',
    default: ''
  });

export const makeUpState = atom({
    key: 'makeUpState',
    default: 'blush'
  });
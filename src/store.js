import { atom } from "recoil";

export const counterState = atom({
    key : 'counterState', // 고유한 key
    default : 0 // 상태의 기본값
})

export const textState = atom({
    key : 'textState',
    default : 'value값만 불러올 수도 있다!'
})
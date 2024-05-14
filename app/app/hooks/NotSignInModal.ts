import {create} from 'zustand'

type NotSignInModal = {
    open : boolean,
    closeModal : () => void
    openModal : () => void
}

export const NotSignInModal = create<NotSignInModal>((set) => ({
    open : false,
    closeModal: () => set({open : false}),
    openModal: () => set({open : true}),
}))
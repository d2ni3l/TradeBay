


import {create} from 'zustand'

interface postArticleModalType{
    open: boolean
    openModal: () => void
    closeModal : () => void
}

const postArticleModal = create<postArticleModalType>((set) => ({
    open: false,
    openModal : () => set({open : true}),
    closeModal : () => set({open : false})

}))

export default postArticleModal;
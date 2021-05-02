export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: 'pack' | 'folder'
    created: Date | string
    updated: Date | string
    __v: number
}

export type PacksStateType = typeof packsInitState

export const packsInitState = {
    packs: null as PackType[] | null,
}

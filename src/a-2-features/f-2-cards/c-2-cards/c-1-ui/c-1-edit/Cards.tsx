import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {CardsDomainType, CardType} from '../../c-2-bll/cardsInitState'
import {Button} from 'antd'
import {useCallback, useEffect, useState} from 'react'
import {createCardTC, deleteCardTC, getCardsTC} from '../../c-2-bll/cardsThunks'
import {Search} from '../../../../../a-3-common/c-4-search/Search'
import {CardsTable} from './e-1-Table/CardsTable'
import {useDebounce} from '../../../../../a-3-common/c-3-debounce/useDebounce'

export const Cards = () => {
    const dispatch = useDispatch()
    const packId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const cards = useSelector<AppRootStateType, CardsDomainType>(state => state.cards)
    const addCardHandler = () => dispatch(createCardTC({cardsPack_id: packId}))
    const deleteCardHandler = (id: string) => dispatch(deleteCardTC(id))

    //search
    const [searchValue, setSearchValue] = useState('')
    const debouncingValue = useDebounce(searchValue, 1000)
    const setSearchValueHandler = useCallback((newValue: string) => {
        setSearchValue(newValue)
    }, [])

    //pagination
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const onPageChange = (page: number, pageSize?: number | undefined) => {
        setPageSize(pageSize as number)
        setCurrentPage(page)
    }

    //sorting
    const [sorted, setSorted] = useState('')
    const setSortedHandler = (fieldDirection:string) => setSorted(fieldDirection)

    useEffect(() => {
        dispatch(getCardsTC({
            cardsPack_id: packId,
            cardAnswer: debouncingValue,
            cardQuestion: debouncingValue,
            pageCount: pageSize,
            page: currentPage,
            sortCards: sorted
        }))
    }, [packId, dispatch, debouncingValue, pageSize, currentPage, sorted])

    return (
        <>
            <Search value={searchValue} changeValue={setSearchValueHandler}/>
            <Button onClick={addCardHandler}>Add new card</Button>
            <CardsTable setSortedHandler={setSortedHandler} onPageChange={onPageChange} cards={cards} deleteCardHandler={deleteCardHandler}/>
        </>
    )
}
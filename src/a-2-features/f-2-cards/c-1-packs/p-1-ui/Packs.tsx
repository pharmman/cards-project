// import {useDispatch, useSelector} from 'react-redux'
// import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
// import {PacksDomainType} from '../p-2-bll/packsInitState'
// import React, {useCallback, useEffect, useState} from 'react'
// import {createPackTC, getPacksTC} from '../p-2-bll/packsThunks'
// import {Button, Checkbox} from 'antd'
// import {ProfileType} from '../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
// import {CheckboxChangeEvent} from 'antd/es/checkbox'
// import {packsActions} from '../p-2-bll/packsActions'
// import {cardsActions} from '../../c-2-cards/c-2-bll/cardsActions'
// import {Redirect} from 'react-router-dom'
// import {PATH} from '../../../../a-1-main/m-1-ui/main/routes/Pages'
// import {PacksTable} from './u-1-Table/PacksTable'
// import {useDebounce} from '../../../../a-3-common/c-3-debounce/useDebounce'
// import {Search} from '../../../../a-3-common/c-4-search/Search'
// import {Sidebar} from './u-2-Sidebar/Sidebar'
// import {getCardsTC} from '../../c-2-cards/c-2-bll/cardsThunks'
//
// export const Packs = () => {
//     const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile as ProfileType)
//     const packs = useSelector<AppRootStateType, PacksDomainType>(state => state.packs)
//     const dispatch = useDispatch()
//     const [editRedirect, setEditRedirect] = useState<boolean>(false)
//     const [learnRedirect, setLearnRedirect] = useState<boolean>(false)
//     const redirectToEditCards = (id: string) => {
//         dispatch(cardsActions.setCardsPackId(id))
//         setEditRedirect(true)
//     }
//     const redirectToLearnCards = (id: string) => {
//         dispatch(cardsActions.setCardsPackId(id))
//         setLearnRedirect(true)
//     }
//
//     //pagination
//     const [pageSize, setPageSize] = useState(10)
//     const [currentPage, setCurrentPage] = useState(1)
//     const onPageChange = (page: number, pageSize?: number | undefined) => {
//         setPageSize(pageSize as number)
//         setCurrentPage(page)
//     }
//
//     //packsActions
//     const addPackHandler = () => dispatch(createPackTC())
//     const [myPacks, setMyPacks] = useState<boolean>(!!packs.packsUserId)
//     const setMyPacksHandler = (e: CheckboxChangeEvent) => setMyPacks(e.target.checked)
//
//     //search
//     const [searchValue, setSearchValue] = useState('')
//     const debouncingValue = useDebounce(searchValue, 1000)
//     const setSearchValueHandler = useCallback((newValue: string) => {
//         setSearchValue(newValue)
//     }, [])
//
//     //sorting
//     const [sorted, setSorted] = useState('')
//     const setSortedHandler = (fieldDirection: string) => setSorted(fieldDirection)
//
//     //maxMin cards count
//     const [minCardsCount, setMinCardsCount] = useState(0)
//     const setMinCardsHandler = (cards: number) => setMinCardsCount(cards)
//     const [maxCardsCount, setMaxCardsCount] = useState(0)
//     const setMaxCardsHandler = (cards: number) => setMaxCardsCount(cards)
//     const debouncedMinCardsCount = useDebounce(minCardsCount.toString(), 1000)
//     const debouncedMaxCardsCount = useDebounce(maxCardsCount.toString(), 1000)
//
//     useEffect(() => {
//         if (myPacks && profile) {
//             dispatch(packsActions.setPacksUserId(profile._id))
//         } else {
//             dispatch(packsActions.setPacksUserId(''))
//         }
//         profile && dispatch(getPacksTC({
//             packName: debouncingValue,
//             pageCount: pageSize,
//             page: currentPage,
//             sortPacks: sorted,
//             min: debouncedMinCardsCount,
//             max: debouncedMaxCardsCount
//         }))
//     }, [myPacks, dispatch, profile, debouncingValue, pageSize, currentPage, sorted, debouncedMinCardsCount, debouncedMaxCardsCount])
//
//     if (editRedirect) return <Redirect to={PATH.CARDS}/>
//     if (learnRedirect) return <Redirect to={PATH.LEARN}/>
//
//     return (
//         <>
//             <Sidebar setMinCount={setMinCardsHandler} setMaxCount={setMaxCardsHandler}
//                      packsTotalCount={packs.maxCardsCount}/>
//             <Search value={searchValue} changeValue={setSearchValueHandler}/>
//             <div style={{textAlign: 'left'}}>
//                 <Button type="primary" onClick={addPackHandler}>
//                     Create Pack
//                 </Button>
//             </div>
//             <div style={{textAlign: 'left'}}>
//                 <Checkbox onChange={(e) => setMyPacksHandler(e)}>My packs</Checkbox>
//             </div>
//             <PacksTable setSortedHandler={setSortedHandler} learnRedirect={redirectToLearnCards}
//                         redirectToEditCards={redirectToEditCards}
//                         onPageChange={onPageChange} packs={packs} profile={profile}/>
//         </>
//     )
// }
export const a = () => {}
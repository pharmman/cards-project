import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {CardType} from '../c-2-bll/cardsInitState'
import {Button, Table} from 'antd'
import {useEffect} from 'react'
import {createCardTC, deleteCardTC, getCardsTC} from '../c-2-bll/cardsThunks'

export const Cards = () => {
    const dispatch = useDispatch()
    const packId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const cards = useSelector<AppRootStateType, CardType[] | null>(state => state.cards.cards)
    const addCardHandler = () => dispatch(createCardTC({cardsPack_id: packId}))
    const deleteCardHandler = (id:string) => dispatch(deleteCardTC(id))
    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question'
        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            key: 'answer'
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated'
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions'
        }
    ]

    let data
    if (cards) {
        data = cards.map((c, index) => ({
            key: index,
            question: c.question,
            answer: c.answer,
            lastUpdated: new Date(c.updated).toLocaleDateString('ru'),
            grade: c.grade,
            actions:
                <>
                    <Button onClick={() => deleteCardHandler(c._id)}>Delete</Button>
                    <Button>Edit</Button>
                </>
        }))
    }

    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: packId}))
    }, [packId, dispatch])

    return (
        <>
            <Button onClick={addCardHandler}>Add new card</Button>
            <Table dataSource={data} columns={columns}/>
        </>
    )
}
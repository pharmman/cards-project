import {Button, Table} from 'antd'
import {CardType} from '../../c-2-bll/cardsInitState'
import React from 'react'

type CardsTablePropsType = {
    cards: CardType[] | null
    deleteCardHandler: (id: string) => void
}

export const CardsTable: React.FC<CardsTablePropsType> = ({cards, deleteCardHandler}) => {
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

    return <Table dataSource={data} columns={columns}/>
}
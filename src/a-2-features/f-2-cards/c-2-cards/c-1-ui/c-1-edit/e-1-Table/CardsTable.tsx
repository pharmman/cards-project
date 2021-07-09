import {Button, Pagination, Table} from 'antd'
import {CardsDomainType} from '../../../c-2-bll/cardsInitState'
import React, {useEffect, useState} from 'react'

type CardsTablePropsType = {
    cards: CardsDomainType
    deleteCardHandler: (id: string) => void
    onPageChange:(page: number, pageSize?: number | undefined) => void
    setSortedHandler: (fieldDirection: string) => void
}

export const CardsTable: React.FC<CardsTablePropsType> = ({cards, deleteCardHandler, onPageChange, setSortedHandler}) => {
    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
            sorter: true
        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            key: 'answer',
            sorter: true
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated'
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
            sorter: true
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions'
        }
    ]
    let data
    if (cards.cards) {
        data = cards.cards.map((c, index) => ({
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

    //sorting
    const [sortingField, setSortingField] = useState('')
    const [sortingDirection, setSortingDirection] = useState('')
    const onChange = (pagination: any, filters: any, sorter: any, extra: any) =>  {
        setSortingField(sorter.field)
        setSortingDirection(sorter.order === 'ascend' ? '0' : '1')
    }
    useEffect(() => {
        (sortingField && sortingDirection) && setSortedHandler(`${sortingDirection}${sortingField}`)
    }, [sortingField, sortingDirection, setSortedHandler])

    return (
        <>
            <Table pagination={false} onChange={onChange} sortDirections={['ascend', 'descend', 'ascend']} dataSource={data} columns={columns}/>
            <Pagination
                showSizeChanger
                total={cards.cardsTotalCount}
                current={cards.page}
                onChange={onPageChange}
                locale={{items_per_page: ''}}
            />
        </>
    )
}
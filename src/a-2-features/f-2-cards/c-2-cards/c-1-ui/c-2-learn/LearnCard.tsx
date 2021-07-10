// import {CardsDomainType, CardType} from '../../c-2-bll/cardsInitState'
// import {useDispatch, useSelector} from 'react-redux'
// import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
// import {useEffect, useState} from 'react'
// import {Button, Card, Radio, RadioChangeEvent, Space} from 'antd'
// import Title from 'antd/es/typography/Title'
// import {getCardsTC, updateCardGradeTC} from '../../c-2-bll/cardsThunks'
//
// const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']
//
// const getCard = (cards: CardType[]) => {
//     const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0)
//     const rand = Math.random() * sum
//     const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
//             const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)
//             return {sum: newSum, id: newSum < rand ? i : acc.id}
//         }
//         , {sum: 0, id: -1})
//     return cards[res.id + 1]
// }
//
// export const LearnCard = () => {
//     const dispatch = useDispatch()
//     const packId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
//     const [first, setFirst] = useState(true)
//     const [isShowAnswer, setIsShowAnswer] = useState(false)
//     const [gradeValue, setGradeValue] = useState<number>(0)
//     const showAnswer = () => setIsShowAnswer(true)
//     const cards = useSelector<AppRootStateType, CardType[] | null>(state => state.cards.cards) as CardType[]
//     const [learningCard, setLearningCard] = useState<CardType>({
//         cardsPack_id: '',
//         grade: 1,
//         question: '',
//         shots: 1,
//         user_id: '',
//         updated: '',
//         __v: 1,
//         _id: '',
//         type: '',
//         answer: '',
//         created: '',
//         rating: 1
//     })
//
//     useEffect(() => {
//         if (first) {
//             dispatch(getCardsTC({cardsPack_id: packId}))
//             setFirst(false)
//         }
//         if (cards) {
//             setLearningCard(getCard(cards))
//         }
//     }, [cards, first, dispatch, packId])
//
//     const onNext = () => {
//         dispatch(updateCardGradeTC({card_id: learningCard._id, grade: gradeValue}))
//         setLearningCard(getCard(cards))
//         setIsShowAnswer(false)
//     }
//
//     const onChangeRadio = (e: RadioChangeEvent) => {
//         console.log(e.target.value)
//         setGradeValue(e.target.value)
//     }
//
//     return (
//         <Card>
//             <div><b><span>Question: </span></b><span>{learningCard.question}</span></div>
//             {!isShowAnswer ?
//                 <Button onClick={showAnswer}>Show answer</Button>
//                 :
//                 <>
//                     <div><b>Answer: </b>{learningCard.answer}</div>
//                     <div><b><span>Rate yourself:</span></b></div>
//                     <Radio.Group onChange={onChangeRadio}>
//                         <Space direction="vertical">
//                             {grades.map((grade, index) => <Radio key={index} value={index + 1}>{grade}</Radio>)}
//                         </Space>
//                     </Radio.Group>
//                     <Button onClick={onNext}>Next</Button>
//                 </>
//             }
//         </Card>
//     )
// }
export const a = () => {}
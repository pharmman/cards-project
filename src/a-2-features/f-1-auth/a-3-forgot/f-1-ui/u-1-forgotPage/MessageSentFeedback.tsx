import {Card, Col, Row, Typography} from 'antd'
import React from 'react'

type MessageSentFeedbackPropsType = {
    timeForNextTry: number
}

export const MessageSentFeedback:React.FC<MessageSentFeedbackPropsType> = ({timeForNextTry}) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Row justify={'center'} align={'top'} style={{minHeight: '100vh'}}>
                <Col span={10}>
                    <Card>
                        <Typography.Title level={3}>Email sent, check your email </Typography.Title>
                        <br/>
                        <Typography.Title level={3}>You can try again after: {timeForNextTry}</Typography.Title>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
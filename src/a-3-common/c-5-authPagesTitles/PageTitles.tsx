import {Col, Row, Space} from 'antd'
import React from 'react'
import Title, {TitleProps} from 'antd/es/typography/Title'
import styled from 'styled-components'


const StyledTitle: React.FC<TitleProps> = styled(Title)`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`

export const PageTitles = (props:{title: string}) => {
    return (
        <Row justify={'center'} style={{marginBottom: '40px'}}>
            <Col>
                <Space align={'center'} size={'middle'} direction={'vertical'}>
                    <StyledTitle level={3}>Card Project</StyledTitle>
                    <StyledTitle level={4}>{props.title}</StyledTitle>
                </Space>
            </Col>
        </Row>
    )
}
import {LoadingOutlined} from '@ant-design/icons'
import React from 'react'
import {Row, Spin} from 'antd'


export const Preloader = () => {
    const antIcon = <LoadingOutlined style={{fontSize: 96}} spin/>
    return (
        <Row justify={'center'} align={'middle'} style={{minHeight: '100vh'}}>
            <Spin indicator={antIcon}/>
        </Row>
    )
}
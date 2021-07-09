import {Slider} from 'antd'
import React from 'react'

type SidebarPropsType = {
    packsTotalCount: number
    setMaxCount: (cards: number) => void
    setMinCount: (cards: number) => void
}

export const Sidebar: React.FC<SidebarPropsType> = ({packsTotalCount, setMinCount, setMaxCount}) => {

    const onChange = (value: [number, number]) => {
        setMinCount(value[0])
        setMaxCount(value[1])
    }

    return <Slider range onChange={onChange} max={packsTotalCount || 100}
                   style={{maxWidth: '200px'}}
                   tooltipPlacement={'top'} defaultValue={[0, 70]}/>
}
import {Input} from 'antd'
import React from 'react'

type SearchPropsType = {
    value: string
    changeValue: (newValue:string) => void
}

export const Search: React.FC<SearchPropsType> = ({value, changeValue}) => {
    const changeValueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        changeValue(e.currentTarget.value)
    }

    return <Input value={value} onChange={changeValueHandler} placeholder={'Search'}/>
}
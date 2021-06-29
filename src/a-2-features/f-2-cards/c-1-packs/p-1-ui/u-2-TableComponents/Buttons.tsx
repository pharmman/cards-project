import {PackType} from '../../p-2-bll/packsInitState'
import React from 'react'
import {Button} from 'antd'

type ButtonEditingConditionPropsType = {
    saveEditedValue: (id: string) => void
    cancelEditedValue: (id: string) => void
    packId: string
}
export const ButtonsEditingCondition: React.FC<ButtonEditingConditionPropsType> = ({
                                                                                       cancelEditedValue,
                                                                                       saveEditedValue,
                                                                                       packId
                                                                                   }) => {
    return (
        <>
            <Button onClick={() => saveEditedValue(packId)}>Save</Button>
            <Button onClick={() => cancelEditedValue(packId)}>Cancel</Button>
        </>
    )
}
type ButtonsStableConditionPropsType = {
    profileId?: string
    deletePackHandler: (id: string) => void
    setEditedPack: (pack: PackType) => void
    pack: PackType
}
export const ButtonsStableCondition: React.FC<ButtonsStableConditionPropsType> = ({
                                                                                      pack,
                                                                                      profileId,
                                                                                      setEditedPack,
                                                                                      deletePackHandler
                                                                                  }) => {
    return (
        <>
            {pack.user_id === profileId &&
            <>
                <Button onClick={() => deletePackHandler(pack._id)}>Delete</Button>
                <Button onClick={() => setEditedPack(pack)}>Edit</Button>
            </>
            }
            <Button onClick={() => {
            }}>Learn</Button>
        </>
    )
}
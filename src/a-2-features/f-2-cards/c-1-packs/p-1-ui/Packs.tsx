import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {PackType} from '../p-2-bll/packsInitState'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {createPackTC, deletePackTC, getPacksTC} from '../p-2-bll/packsThunks'
import {Button, Form, FormInstance, Input, Table} from 'antd'
import {ProfileType} from '../../../f-1-auth/a-4-profile/p-2-bll/profileActions'

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
    index: number;
}

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof PackType;
    record: PackType;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell: React.FC<EditableCellProps> = ({
                                                       title,
                                                       editable,
                                                       children,
                                                       dataIndex,
                                                       record,
                                                       ...restProps
                                                   }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<Input>(null);
    const form = useContext(EditableContext)!;
    const dispatch = useDispatch()

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = () => {
        console.log(form.validateFields())
        // dispatch(updatePack(form.setFieldsValue.name))
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export const Packs = () => {

    const packs = useSelector<AppRootStateType, PackType[] | null>(state => state.packs.packs)
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])


    const addPackHandler = () => {
        dispatch(createPackTC())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePackTC(id))
    }

    let columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            editable: true
        },
        {
            title: 'Cards Count',
            dataIndex: 'cardsCount',
            key: 'cardsCount'
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade'
        },
        {
            title: 'Shots',
            key: 'shots',
            dataIndex: 'shots'
        },
        {
            title: 'Rating',
            key: 'rating',
            dataIndex: 'rating'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'x'
        }
    ]

    let data
    if (packs) {
        data = packs.map((p, index) => ({
            key: index,
            name: p.name,
            cardsCount: p.cardsCount,
            grade: p.grade,
            shots: p.shots,
            rating: p.rating,
            action: p.user_id === profile?._id && <a onClick={() => deletePackHandler(p._id)}>Delete</a>
        }))
    }

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

columns = columns.map(col => {
    if (!col.editable) {
        return col
    }
    return {
        ...col,
        onCell: (record: PackType) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            key: col.key
        }),
    };
});

    return (
        <div>
            <div style={{textAlign: 'left'}}>
                <Button type="primary" onClick={addPackHandler}>
                    Create Pack
                </Button>
            </div>
            <Table components={components} columns={columns} dataSource={data}/>
        </div>
    )
}
import React, {FC} from 'react';
import {Button, Drawer, Space} from "antd";
import {AddForm} from "./AddForm";
import {useDispatch, useSelector} from "react-redux";
import {DrawerVariantType, toggleDrawerAC} from "../../../../redux/reducers/app-reducer";
import {AppRootType} from "../../../../redux/store";


type AddTaskDrawerType = {
    isOpen: boolean
    tasksListId: string
}

export const AddEntityDrawer: FC<AddTaskDrawerType> = (
    {
        isOpen,
        tasksListId
    }
) => {
    const formVariant = useSelector<AppRootType, DrawerVariantType>(state => state.app.formVariant)
    const dispatch = useDispatch()
    const onCloseCallback = () => {
        dispatch(toggleDrawerAC(false, null))
    }

    return (
        <Drawer
            title={formVariant === 'addTask' ? 'New Task' : 'New Tasks List'}
            placement={'left'}
            width={400}
            open={isOpen}
            closable={false}
            onClose={onCloseCallback}
            extra={
                <Space>
                    <Button onClick={onCloseCallback}>Cancel</Button>
                </Space>
            }
        >
            <AddForm tasksListId={tasksListId}/>
        </Drawer>
    );
};




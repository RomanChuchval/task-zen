import React, {FC} from 'react';
import {Button, Drawer, Space} from "antd";
import {AddTaskForm} from "./AddTaskForm";
import {useDispatch} from "react-redux";
import {toggleDrawerAC} from "../../../../redux/reducers/app-reducer";

type AddTaskDrawerType = {
    isOpen: boolean
    tasksListId: string
}

export const AddTaskDrawer: FC<AddTaskDrawerType> = (
    {
        isOpen,
        tasksListId
    }
) => {
    const dispatch = useDispatch()
    const onCloseCallback = () => {
        dispatch(toggleDrawerAC(false))
    }

    return (
        <Drawer
            title="New Task"
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
            <AddTaskForm tasksListId={tasksListId}/>
        </Drawer>
    );
};




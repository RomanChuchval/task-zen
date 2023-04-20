import React, {FC} from 'react';
import {Button, Drawer, Space} from "antd";
import {AddTaskForm} from "./AddTaskForm";

type AddTaskDrawerType = {
    isOpen: boolean
    onCloseCallback: (status: boolean) => void
    tasksListId: string
}

export const AddTaskDrawer: FC<AddTaskDrawerType> = (
    {
        isOpen,
        onCloseCallback,
        tasksListId
    }
) => {
    return (
        <Drawer
            title="New Task"
            placement={'left'}
            width={400}
            open={isOpen}
            closable={false}
            onClose={()=>onCloseCallback(false)}
            extra={
                <Space>
                    <Button onClick={()=>onCloseCallback(false)}>Cancel</Button>
                </Space>
            }
        >
            <AddTaskForm tasksListId={tasksListId}/>
        </Drawer>
    );
};




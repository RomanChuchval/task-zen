import React, {FC} from 'react';
import Input from "antd/lib/input/Input";
import TextArea from "antd/lib/input/TextArea";
import s from 'common/components/main/task/addEntityDrawer/AddTaskForm.module.css'
import Radio from 'antd/lib/radio';
import Divider from "antd/lib/divider";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {PriorityTypes} from "redux/reducers/filter-reducer";
import {Button} from "antd";
import {createTaskAC} from "redux/reducers/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "redux/store";
import {DrawerVariantType, toggleDrawerAC} from "redux/reducers/app-reducer";
import {createTasksListAC} from "redux/reducers/tasks-lists-reducer";


type AddTaskFormPropsType = {
    tasksListId: string
}
type Inputs = {
    title: string,
    description: string,
    priority: PriorityTypes
};

export const AddForm: FC<AddTaskFormPropsType> = ({tasksListId}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm<Inputs>({
        mode: "all"
    });

    const formVariant = useSelector<AppRootType, DrawerVariantType>(state => state.app.formVariant)
    const dispatch = useDispatch()

    const onFormSubmit: SubmitHandler<Inputs> = (data) => {
        if(formVariant === 'addTask') {
            dispatch(createTaskAC(tasksListId, data))
        } else if (formVariant === 'addTasksList') {
            dispatch(createTasksListAC(data))
        }
        reset()
        dispatch(toggleDrawerAC(false, null))
    }
    const placeHolderVariant = formVariant === 'addTask' ? 'Task' : 'Tasks list'

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.add_task_form}>
            <div>
                <Controller name={'title'}
                            control={control}
                            rules={{required: true}}
                            render={({field}) => (
                                <Input {...field} size={"large"}
                                       placeholder={errors.title ? 'Title is required':`${placeHolderVariant} title`}
                                       status={errors.title && 'error'}
                                />)}
                />
            </div>
            <div>
                <Controller name={'description'}
                            control={control}
                            rules={{required: true}}
                            render={({field}) => (
                                <TextArea {...field} maxLength={100}
                                          placeholder={errors.description
                                              ? 'Description is required'
                                              :`${placeHolderVariant} description`}
                                          status={errors.description && 'error'}
                                          size={'large'}/>
                            )}/>
            </div>
            <div className={s.priority_selector}>
                <Divider>Priority</Divider>
                <Controller name={'priority'}
                            control={control}
                            defaultValue={'Low'}
                            rules={{required: true}}
                            render={({field}) => (
                                <Radio.Group {...field} defaultValue='Low' buttonStyle="solid">
                                    <Radio.Button value='Low'>Low</Radio.Button>
                                    <Radio.Button value='Medium'>Medium</Radio.Button>
                                    <Radio.Button value='High'>High</Radio.Button>
                                </Radio.Group>
                            )}/>
            </div>
            <Button type="primary" htmlType={'submit'}>
                {formVariant === 'addTask' ? 'Create Task' : 'Create Tasks List'}
            </Button>
        </form>
    );
};


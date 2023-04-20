import React, {memo} from 'react';
import s from "./AddNewTasksList.module.css";
import {SuperButton} from "../../common/SuperButton";
import {useDispatch} from "react-redux";
import {toggleDrawerAC} from "../../../redux/reducers/app-reducer";

export const AddNewTasksList = memo(() => {
    const dispatch = useDispatch()

    const onOpenDrawerHandler = () => {
        dispatch(toggleDrawerAC(true, 'addTasksList'))
    }
    return (
        <div className={s.sidebar_add_new_taskList}>
           <SuperButton btnType={"primary"} callback={onOpenDrawerHandler}>
               Add New TasksList
           </SuperButton>
        </div>
    );
});


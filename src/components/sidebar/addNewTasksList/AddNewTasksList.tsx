import React, {memo} from 'react';
import s from "./AddNewTasksList.module.css";
import {SuperButton} from "../../common/SuperButton";

export const AddNewTasksList = memo(() => {
    console.log('add new render')
    return (
        <div className={s.sidebar_add_new_taskList}>
           <SuperButton btnType={"primary"} callback={()=>{}}>
               Add New TasksList
           </SuperButton>
        </div>
    );
});


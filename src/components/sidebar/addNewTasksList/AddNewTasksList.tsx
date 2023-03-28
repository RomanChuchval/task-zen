import React from 'react';
import s from "./AddNewTasksList.module.css";
import {SuperButton} from "../../common/SuperButton";

export const AddNewTasksList = () => {
    return (
        <div className={s.sidebar_add_new_taskList}>
           <SuperButton btnType={"primary"} callback={()=>{}}>
               Add New TasksList
           </SuperButton>
        </div>
    );
};


import React from 'react';
import s from './Task.module.css'
import {SuperCheckbox} from "../../common/SuperCheckbox";



export const Task = () => {
    return (
        <div className={s.task_wrapper}>
            <div className={s.task}>
                <SuperCheckbox isChecked={false} callback={()=>{}}/>
                <span>React</span>
                <button>remove</button>
            </div>
            <div className={s.task_description}>
                Description
            </div>
        </div>
    );
};

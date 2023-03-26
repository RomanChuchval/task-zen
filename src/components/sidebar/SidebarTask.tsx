import React from 'react';
import s from './SidebarTask.module.css'
import {Badge} from 'antd';
export const SidebarTask = () => {

    return (
        <Badge.Ribbon text="High" color={'#f5222d'}>
        <div className={s.sidebar_task_wrapper}>
            <div>Learn React</div>
               <span className={s.sidebar_task_description}>
                   Lorem ipsum dolor sit amet, cons adipisicing elit.
               </span>
                <div className={s.sidebar_task_status}>
                    Status
                </div>
        </div>
        </Badge.Ribbon>
    );
};


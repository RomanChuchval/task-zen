import React from 'react';
import s from './Main.module.css'
import {Task} from "./task/Task";


export const Main = () => {


    return (
        <div className={s.main_wrapper}>
            <div>
                <div className={s.main_header}>
                    Task Overview
                </div>
                <div className={s.main_title}>
                    <span>Learn React</span>
                    <span>Members</span>
                </div>
                <div className={s.main_settings}>
                    <div>add new</div>
                    <div>edit task list</div>
                    <div>Sort</div>
                    <div>filter</div>
                </div>
            </div>
            <div className={s.main_tasks_wrapper}>
                <div className={s.main_tasks}>
                    <div className={s.tasks_list_header}>
                        Tasks
                    </div>
                    <div className={s.tasks_list}>
                        <Task/>
                        <Task/>


                    </div>
                </div>
                <div className={s.main_tasks_stats}>
                    stats
                </div>
            </div>

        </div>
    );
};


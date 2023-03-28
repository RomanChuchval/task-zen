import React from 'react';
import s from "./Statistics.module.css";
import {Progress} from "antd";

export const Statistics = () => {
    return (
        <div className={s.main_tasks_stats}>
            <span className={s.bold_span}>Progress</span>
            <Progress type="circle" size={120} percent={33} />
        </div>
    );
};


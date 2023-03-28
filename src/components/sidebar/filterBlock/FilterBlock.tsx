import React from 'react';
import {SuperButton} from "../../common/SuperButton";
import s from "./FilterBlock.module.css";

export const FilterBlock = () => {

    return (
        <>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={1} btnColor={"#52c41a"} withBadge={true}>
                    Low
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={1} btnColor={"#faad14"} withBadge={true}>
                    Medium
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={1} btnColor={"#f5222d"} withBadge={true}>
                    High
                </SuperButton>
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={1} withBadge={true}>
                    All
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={1} withBadge={true} >
                    Active
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={2} withBadge={true}>
                    Completed
                </SuperButton>
            </div>
        </>


    );
};


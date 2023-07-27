import React, {memo} from 'react';
import s from "common/components/sidebar/search/CustomSearch.module.css";
import Search from "antd/es/input/Search";

export const CustomSearch = memo(() => {
    console.log('sidebar search render')
    return (
        <div className={s.sidebar_search}>
            <Search size='middle' style={{width: '95%'}} placeholder="search task" enterButton={'Search'}/>
        </div>
    );
});


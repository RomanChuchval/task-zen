import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/logo.png'
import avatar from '../../assets/2023-03-20 16.14.05.jpg'
import {Button} from 'antd';
import {LogoutOutlined, MessageOutlined} from '@ant-design/icons';
import {Avatar, Badge} from 'antd';

export const Header = () => {
    return (
        <div className={s.header_wrapper}>
            <div className={s.header_logo_title}>
                <img className={s.app_logo} src={logo} alt=""/>
                <span className={s.app_title}>Tasks Manager</span>
            </div>
            <div className={s.header_login}>
                <Badge count={9}>
                    <MessageOutlined style={{fontSize: "25px", color: "#FFFFFF"}}/>
                </Badge>
                <Avatar size={50} src={avatar}/>
                <Button type="primary">Log Out<LogoutOutlined/></Button>
            </div>
        </div>
    );
};


import React from 'react';
import s from 'common/components/footer/Footer.module.css'
import {GithubOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined} from '@ant-design/icons';

export const Footer = () => {
    return (
        <div className={s.footer_wrapper}>
            <span className={s.footer_copy}>Tasks Manager ©2023 Created by Roman Chuchval</span>
            <div className={s.social_links}>
                <a href="/">
                    <GithubOutlined style={{fontSize: "25px", color: "#ffffff"}}/>
                </a>
                <a href="/">
                    <InstagramOutlined style={{fontSize: "25px", color: "#ffffff"}}/>
                </a>
                <a href="/">
                    <FacebookOutlined style={{fontSize: "25px", color: "#ffffff"}}/>
                </a>
                <a href="/">
                    <TwitterOutlined style={{fontSize: "25px", color: "#ffffff"}}/>
                </a>
                <a href="/">
                    <LinkedinOutlined style={{fontSize: "25px", color: "#ffffff"}}/>
                </a>
            </div>
        </div>
    );
};


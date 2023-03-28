import React from 'react';
import {Avatar, Tooltip} from "antd";
import {AntDesignOutlined, UserOutlined} from "@ant-design/icons";

export const MembersAvatars = () => {
    return (
        <Avatar.Group
            maxCount={3}
            size="large"
            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
            <Avatar style={{ backgroundColor: '#6379d9' }}>NK</Avatar>
            <Avatar style={{ backgroundColor: '#f56a00' }}>VA</Avatar>
            <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Avatar.Group>
    );
};


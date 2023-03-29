import React, {ReactNode} from 'react';
import {Badge, Button} from "antd";


type ButtonSizeType = 'large' | 'middle' | 'small'
type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
type SuperButtonPropsType = {
    btnSize?: ButtonSizeType
    btnType: ButtonType
    btnColor?: string
    callback?: () => void
    badgeSize?: 'default' | 'small'
    badgeCount?: ReactNode
    children: React.ReactNode
    withBadge?: boolean
    block?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        btnSize,
        btnType,
        btnColor,
        callback,
        badgeSize,
        badgeCount,
        children,
        withBadge,
        block
    }
) => {

    const getButtonColor = () => btnColor ? {backgroundColor: btnColor} : undefined
    const buttonColor = getButtonColor()

    const onClickHandler = () => {
        callback && callback()
    }

    return (
        withBadge
            ?
            <Badge size={badgeSize} count={badgeCount}>
                <Button onClick={onClickHandler} size={btnSize} type={btnType} style={buttonColor} block={block}>
                    {children}
                </Button>
            </Badge>
            :
            <Button onClick={onClickHandler} size={btnSize} type={btnType} style={buttonColor}>
                {children}
            </Button>
    );
};


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
    shape?: 'default' | 'circle' | 'round'
    disabled?: boolean
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
        block,
        shape,
        disabled
    }
) => {

    const getButtonColor = () => btnColor ? btnColor : undefined
    const buttonColor = getButtonColor()

    const onClickHandler = () => {
        callback && callback()
    }

    return (
        withBadge
            ?
            <Badge size={badgeSize} count={badgeCount}>
                <Button onClick={onClickHandler} size={btnSize} type={btnType}
                        style={{backgroundColor: buttonColor}} block={block} disabled={disabled}>
                    {children}
                </Button>
            </Badge>
            :
            <Button onClick={onClickHandler} size={btnSize}
                    type={btnType} style={{backgroundColor: buttonColor}}
                    block={block} shape={shape} disabled={disabled}

            >
                {children}
            </Button>
    );
};


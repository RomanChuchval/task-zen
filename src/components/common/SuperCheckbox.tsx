import React, {FC} from 'react';
import {Checkbox} from 'antd';

type SuperCheckboxType = {
    isChecked: boolean
    callback: () => void
}

export const SuperCheckbox: FC<SuperCheckboxType> = (
    {
        isChecked
    }
) => {
    return (
        <Checkbox
            onChange={() => {}}
            checked={isChecked}>
            {isChecked ? 'Done' : 'In Progress'}
        </Checkbox>
    )
};


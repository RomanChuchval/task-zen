import React, {FC} from 'react';
import {Checkbox} from 'antd';
import {CheckboxChangeEvent} from "antd/es/checkbox";

type SuperCheckboxType = {
    isChecked: boolean
    callback: (e: CheckboxChangeEvent) => void
}

export const SuperCheckbox: FC<SuperCheckboxType> = (
    {
        isChecked,
        callback
    }
) => {

   const onChangeHandler = (e: CheckboxChangeEvent) => {
       e.stopPropagation()
        callback(e)
    }

    return (
        <Checkbox
            onChange={onChangeHandler}
            checked={isChecked}>
            {isChecked ? 'Done' : 'In Progress'}
        </Checkbox>
    )
};


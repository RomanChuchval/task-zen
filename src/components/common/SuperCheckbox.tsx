import React, {FC} from 'react';
import {Checkbox} from 'antd';
import {CheckboxChangeEvent} from "antd/es/checkbox";

type SuperCheckboxType = {
    isChecked: boolean
    callback: () => void
}

export const SuperCheckbox: FC<SuperCheckboxType> = (
    {
        isChecked,
        callback
    }
) => {

   const onChangeHandler = (e: CheckboxChangeEvent) => {
       e.stopPropagation()
       console.log(e)
        callback()
    }

    return (
        <Checkbox
            onChange={onChangeHandler}
            // onClick={onChangeHandler}
            checked={isChecked}>
            {isChecked ? 'Done' : 'In Progress'}
        </Checkbox>
    )
};


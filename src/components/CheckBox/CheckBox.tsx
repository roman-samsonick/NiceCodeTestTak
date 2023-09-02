import React from 'react';
import { ICallback } from '../../models/clientModels';
import { ActiveCheckBoxIcon } from '../../svg/ActiveCheckBoxIcon';
import { c } from '../../utils/classnameUtills';
import './CheckBox.sass';

interface ICheckBoxProps {
  selectedItems: string[],
  setSelectedItems: (selectedItems: string[]) => void
  value: string,
}

const CheckboxBase = ({
  checked,
  onClickHandler,
}: { checked: boolean; onClickHandler: ICallback }) => {
  return <div className={c('checkbox', { ['checkbox__active']: checked })}
              onClick={() => onClickHandler()}>
    {checked && <ActiveCheckBoxIcon className="checkbox_icon" />}
  </div>;
};

interface IOverallCheckboxProps {
  allItems: string[];
  selectedItems: string[],
  setSelectedItems: (selectedItems: string[]) => void
}

export const OverallCheckbox = ({
  setSelectedItems,
  selectedItems,
  allItems,
}: IOverallCheckboxProps) => {
  const onClickHandler = () => {
    if (selectedItems.length < allItems.length) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  return <CheckboxBase checked={selectedItems.length === allItems.length}
                       onClickHandler={onClickHandler} />;
};

export const CheckBox = ({
  selectedItems,
  setSelectedItems,
  value,
}: ICheckBoxProps) => {
  const checked = selectedItems.includes(value);

  const onClickHandler = () => {
    if (checked) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  return <CheckboxBase checked={checked}
                       onClickHandler={onClickHandler} />;
};

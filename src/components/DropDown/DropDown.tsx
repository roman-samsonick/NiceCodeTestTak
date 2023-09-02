import React, { useRef, useState } from 'react';
import { EllipsisIcon } from '../../svg/EllipsisIcon';
import { useBackdropClick } from '../../utils/hooks/useBackdropClick';
import './DropDown.sass';

export const DropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onBackdropClick = () => {
    setIsDropDownOpen(false);
  };

  useBackdropClick(dropdownRef, onBackdropClick, isDropDownOpen);

  return (
    <div className="dropdown"
         ref={dropdownRef}
         onClick={() => setIsDropDownOpen(true)}>
      <EllipsisIcon className="dropdown_ellipsisicon" />

      {isDropDownOpen && <div className="dropdown_menu">
        <div className="dropdown_menuitem">
          Изменить
        </div>

        <div className="dropdown_menuitem">
          Удалить
        </div>
      </div>}
    </div>
  );
};

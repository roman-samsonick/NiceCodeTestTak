import React, { useState } from 'react';
import { IValueCallback } from '../../models/clientModels';
import { c } from '../../utils/classnameUtills';
import { OverallCheckbox } from '../CheckBox/CheckBox';
import { Searchbar } from '../Searchbar/Searchbar';
import { mockUsers } from '../Users/mockUsers';
import { Users } from '../Users/Users';
import './Sidebar.sass';

interface ISidebarProps {
  setSelectedUserId: IValueCallback<string>;
  selectedUserId: string;
}

export const Sidebar = ({
  selectedUserId,
  setSelectedUserId,
}: ISidebarProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <div className="sidebar">
      <Searchbar />

      <div className="sidebar_actions">

        <div className="sidebar_action">
          {isSelectOpen && <>
            <OverallCheckbox selectedItems={selectedItems}
                             setSelectedItems={setSelectedItems}
                             allItems={mockUsers.map(user => user.id)} />
            Все
          </>}

          <div className={c('sidebar_counter', { ['sidebar_counter__active']: isSelectOpen })}>
            {isSelectOpen ? selectedItems.length : mockUsers.length}
          </div>
        </div>

        <div className="sidebar_choose">
          {isSelectOpen
            ? <>
                <div className="sidebar_text">
                  Действия
                </div>
                <div className="sidebar_text"
                     onClick={() => setIsSelectOpen(false)}>
                  Отменить
                </div>
            </>
            : <div className="sidebar_text"
                   onClick={() => setIsSelectOpen(true)}>
              Выбрать
            </div>}
        </div>
      </div>

      <Users users={mockUsers}
             isSelectOpen={isSelectOpen}
             selectedItems={selectedItems}
             setSelectedItems={setSelectedItems}
             selectedUserId={selectedUserId}
             setSelectedUserId={setSelectedUserId} />
    </div>
  );
};

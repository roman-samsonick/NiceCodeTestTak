import React from 'react';
import { IValueCallback } from '../../models/clientModels';
import { MessageIcon } from '../../svg/MessageIcon';
import { UserIcon } from '../../svg/UserIcon';
import { WarnIcon } from '../../svg/WarnIcon';
import { c } from '../../utils/classnameUtills';
import { CheckBox } from '../CheckBox/CheckBox';
import { Case, Switch } from '../SwitchCase';
import { EUserStatus, IUser } from './mockUsers';
import './Users.sass';

interface IUsersProps {
  users: IUser[],
  isSelectOpen: boolean,
  selectedItems: string[],
  setSelectedItems: (selectedItem: string[]) => void
  setSelectedUserId: IValueCallback<string>,
  selectedUserId: string,
}

export const Users = ({
  users,
  selectedItems,
  isSelectOpen,
  setSelectedItems,
  setSelectedUserId,
  selectedUserId,
}: IUsersProps) => {
  return (
    <div className="users">
      {users.map((user) => {
        return (
          <div key={user.id}
               onClick={() => setSelectedUserId(user.id)}>
            <div className={c('usercard', { ['usercard__active']: selectedUserId == user.id })}>
              <div className="usercard_content">
                {isSelectOpen && <CheckBox selectedItems={selectedItems}
                                           setSelectedItems={setSelectedItems}
                                           value={user.id} />
                }

                <div className="usercard_avatar">
                  {user.img
                    ? <img className="usercard_userimage"
                           src={user.img}
                           alt={user.email} />
                    : <UserIcon className="usercard_usericon" />}
                </div>

                <div className="usercard_username">
                  {user.username
                    ? `${user.username.surname} ${user.username.name}`
                    : user.email
                  }
                </div>
              </div>

              {user.status && <div className="usercard_status">
                <Switch switchValue={user.status}>
                  <Case caseValue={EUserStatus.WARNING}>
                    <WarnIcon />
                  </Case>

                  <Case caseValue={EUserStatus.MESSAGE}>
                    <MessageIcon />
                  </Case>
                </Switch>
              </div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

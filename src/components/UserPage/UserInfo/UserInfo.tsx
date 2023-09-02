import React from 'react';
import { UserIcon } from '../../../svg/UserIcon';
import { DropDown } from '../../DropDown/DropDown';
import './UserInfo.sass';
import { IUser } from '../../Users/mockUsers';

interface IUserInfoProps {
  selectedUser: IUser,
}

export const UserInfo = ({ selectedUser }: IUserInfoProps) => {
  return (
    <div className="userinfo">
      <div className="userinfo_content">
        <div className="userinfo_avatar">
          {selectedUser.img ?
            <img src={selectedUser.img}
                 className="userinfo_userimage"
                 alt="user_photo" />
            : <UserIcon className="userinfo_usericon" />
          }
        </div>

        <div className="userinfo_text">
          <div className="userinfo_name">
            {selectedUser.username
              ? Object.values(selectedUser.username).join(' ')
              : selectedUser.email}
          </div>

          <div className="userinfo_meta">
            {selectedUser.age}  лет, {selectedUser.sex}
          </div>
        </div>
      </div>

      <DropDown />
    </div>
  );
};

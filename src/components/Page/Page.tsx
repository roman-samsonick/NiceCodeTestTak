import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { UserPage } from '../UserPage/UserPage';
import './Page.sass';
import { mockUsers } from '../Users/mockUsers';


export const Page = () => {
  const [selectedUserId, setSelectedUserId] = useState('3');

  const selectedUser = mockUsers.find(user=>user.id===selectedUserId)

  return (
    <div className="pagecontainer">
      <Sidebar setSelectedUserId={setSelectedUserId}
               selectedUserId={selectedUserId} />

      <UserPage selectedUser={selectedUser}/>
    </div>
  );
};

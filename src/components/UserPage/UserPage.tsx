import React, { useState } from 'react';
import { NewNoteIcon } from '../../svg/newNoteIcon';
import { c } from '../../utils/classnameUtills';
import { Case, Switch } from '../SwitchCase';
import { IUser } from '../Users/mockUsers';
import { Events } from './Events/Events';
import { Notes } from './Notes/Notes';
import { UserInfo } from './UserInfo/UserInfo';
import './UserPage.sass';
import { Videos } from './Videos/Videos';
import { Consultations } from './Сonsultations/Consultations';


enum EUserPageTabActive {
  NOTES = 'NOTES',
  CONSULTATIONS = 'CONSULTATIONS',
  VIDEO = 'VIDEO',
  EVENTS = 'EVENTS'
}

interface IUserPageProps {
  selectedUser:IUser,
}

export const UserPage = ({selectedUser}:IUserPageProps) => {

  const [activeTab, setActiveTab] = useState<EUserPageTabActive>(EUserPageTabActive.NOTES);
  return (
    <div className="userpage">
      <UserInfo selectedUser={selectedUser}/>

      <div className="userpage_actions">
        <div className="userpage_tabs">
          <div className={c('userpage_tab', { ['userpage_tab__active']: activeTab === EUserPageTabActive.NOTES })}
               onClick={() => setActiveTab(EUserPageTabActive.NOTES)}>
            Заметки
          </div>

          <div className={c('userpage_tab', { ['userpage_tab__active']: activeTab === EUserPageTabActive.CONSULTATIONS })}
               onClick={() => setActiveTab(EUserPageTabActive.CONSULTATIONS)}>
            Консультации
          </div>

          <div className={c('userpage_tab', { ['userpage_tab__active']: activeTab === EUserPageTabActive.VIDEO })}
               onClick={() => setActiveTab(EUserPageTabActive.VIDEO)}>
            Видео
          </div>

          <div className={c('userpage_tab', { ['userpage_tab__active']: activeTab === EUserPageTabActive.EVENTS })}
               onClick={() => setActiveTab(EUserPageTabActive.EVENTS)}>
            Мероприятия
          </div>
        </div>


        <div className="userpage_newnotecontainer">
          <div className="userpage_newnotetext">
            <Switch switchValue={activeTab}>
              <Case caseValue={EUserPageTabActive.NOTES}>
                <>Новая заметка</>
              </Case>

              <Case caseValue={EUserPageTabActive.CONSULTATIONS}>
                <>Записать</>
              </Case>

              <Case caseValue={EUserPageTabActive.VIDEO}>
                <>Рекомендовать</>
              </Case>

              <Case caseValue={EUserPageTabActive.EVENTS}>
                <>Рекомендовать</>
              </Case>
            </Switch>
          </div>

          <NewNoteIcon />
        </div>
      </div>

      <div className="userpage_content">
        <Switch switchValue={activeTab}>
          <Case caseValue={EUserPageTabActive.NOTES}>
            <Notes />
          </Case>

          <Case caseValue={EUserPageTabActive.CONSULTATIONS}>
            <Consultations />
          </Case>

          <Case caseValue={EUserPageTabActive.VIDEO}>
            <Videos />
          </Case>

          <Case caseValue={EUserPageTabActive.EVENTS}>
            <Events />
          </Case>
        </Switch>
      </div>
    </div>
  );
};

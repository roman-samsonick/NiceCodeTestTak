import React from 'react';
import { CameraActiveIcon } from '../../../svg/CameraActiveIcon';
import { CameraIcon } from '../../../svg/CameraIcon';
import { PersonsIcon } from '../../../svg/PersonsIcon';
import { c } from '../../../utils/classnameUtills';
import { Case, Switch } from '../../SwitchCase';
import './Consultations.sass';

enum EConsultationType {
  ONLINE = 'ONLINE',
  PERSONAL = 'PERSONAL'
}

enum EConsultationStatus {
  DEFAULT = 'DEFAULT',
  ACTIVE = 'ACTIVE',
  NOT_CONFIRMED = 'NOT_CONFIRMED'
}


const mockConsultations: IConsultation[] = [
  {
    id: '1',
    date: '15.01.2019',
    time: '12:30-13:00',
    status: EConsultationStatus.ACTIVE,
    type: EConsultationType.ONLINE,
  },
  {
    id: '2',
    date: '15.01.2019',
    time: '12:30-13:00',
    status: EConsultationStatus.DEFAULT,
    type: EConsultationType.ONLINE,
  },
  {
    id: '3',
    date: '15.01.2019',
    time: '12:30-13:00',
    status: EConsultationStatus.NOT_CONFIRMED,
    type: EConsultationType.PERSONAL,
  },
];

interface IConsultation {
  type: EConsultationType,
  status: EConsultationStatus,
  id: string,
  date: string,
  time: string,
}

interface IConsultationProps {
  consultation: IConsultation;
}

export const Consultations = () => {
  return (
    <div className="consultations">
      {mockConsultations.map(c => <Consultation
        key={c.id}
        consultation={c} />)}
    </div>
  );
};


const Consultation = ({ consultation }: IConsultationProps) => {
  return (
    <div className={c('consultation', { ['consultation__active']: consultation.status === EConsultationStatus.ACTIVE })}>
      <div className="consultation_content">
        <Switch switchValue={consultation.type}>
          <Case caseValue={EConsultationType.ONLINE}>
            {consultation.status === EConsultationStatus.ACTIVE
              ? <CameraActiveIcon />
              : <CameraIcon />}
          </Case>

          <Case caseValue={EConsultationType.PERSONAL}>
            <div className={c('consultation_icon',
              { ['consultation_icon__active']: consultation.status === EConsultationStatus.ACTIVE })}>
              <PersonsIcon />
            </div>
          </Case>
        </Switch>

        <div className="consultation_text">
          <Switch switchValue={consultation.type}>
            <Case caseValue={EConsultationType.PERSONAL}>
              <div className="consultation_name">
                Личный приём
              </div>
            </Case>

            <Case caseValue={EConsultationType.ONLINE}>
              <div className="consultation_name">
                Online консультация
              </div>
            </Case>
          </Switch>

          <div className="consultation_info">
            {consultation.date}, {consultation.time}
          </div>
        </div>
      </div>

      {consultation.status === EConsultationStatus.NOT_CONFIRMED && <div className="consultation_status">
        Не подтверждена
      </div>}
    </div>
  );
};

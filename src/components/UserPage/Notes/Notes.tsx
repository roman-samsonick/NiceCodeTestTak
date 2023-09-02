import React from 'react';
import { DropDown } from '../../DropDown/DropDown';
import './Notes.sass';

interface INote {
  id: string,
  date: string,
  text: string,
  img?: string,
}

interface INoteProps {
  note: INote;
}

const mockNotes: INote[] = [
  {
    id: '1',
    date: '20.12.2019',
    text: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
  },
  {
    id: '2',
    date: '20.12.2019',
    text: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
    img: 'https://s3-alpha-sig.figma.com/img/1153/2461/7c229622bcbe6884f7be41a0fd6d814f?Expires=1694390400&Signature=RQS4n7sYnYYf7gaXr4gFwHr2r2~u1n6sxSsym7c9sjqWt3xYUzajAX9N-Xt-SsyaQoHF9MnJFJgcy5Ef029a1~hB5mX1NBq0JNg1WNYtZkqPUCYIY08QZTWelBzH1qt44ADCjPn121TLziUzg7LpNH4Qv4lDQzQYXEw~zDmriEzZmmgfORjQL4MmmKn9cAOPRCzyiNduOQahdwKRBbUfQqcA-mVzAT7656PjM83RPSQVSsopXLg5KSl2SnQSnBHqHCgtvq-A11qClqAKD9uxeWDZewdxNmPV9eY46Peqfqc7STwLuHon0d-I0fBDYYHXX1AejprSYdM~tnJ6EXGGOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
];

export const Notes = () => {
  return (
    <div className="notes">
      {mockNotes.map(note =>
        <Note note={note}
              key={note.id} />,
      )}
    </div>
  );
};


const Note = ({ note }: INoteProps) => {
  return (
    <div className="notecontainer">

      <div className="note">
        <div className="note_text">
          <p className="note_date">
            {note.date}
          </p>

          {note.text}
        </div>

        <DropDown />
      </div>

      {note.img && <img src={note.img}
                        alt="note"
                        className="note_img" />}
    </div>

  );
};

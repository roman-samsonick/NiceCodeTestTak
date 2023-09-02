import React from 'react';
import { CalendarIcon } from '../../../svg/CalendarIcon';
import { ClockIcon } from '../../../svg/ClockIcon';
import { VideoCameraIcon } from '../../../svg/VideoCameraIcon';
import './Events.sass';

interface IEvent {
  id: string,
  preview: string,
  title: string,
  type: string,
  date: string,
  time: string,
}

interface IEventItemProps {
  event: IEvent;
}

const mockEvents: IEvent[] = [
  {
    id: '1',
    preview: 'https://s3-alpha-sig.figma.com/img/b290/20fc/d40682676472ae98552026199c5eb3b0?Expires=1694390400&Signature=SHTtQgdMhxO5TRpltsCbGStSYGv1t0zfZXUv4Ierxi9a1q0vEBsfpLbgle5NsT9Oqbjt1u3LVOC-LYrarvxS1sqE1fRjto6RN-Jp77i-xkTUwCxJH9y0pAtZjWGXa5O55~H0RsNXr0LGBuAgZZIpXVWn4OgTWe6mdu1hlp0irmp6DNXTXIlUj6knM-Y~WzrKwAEIaVSiIUc0dJDtiQAML3i5apS~0yTPncjaQqd-JDLaQYL3oUo47D~o5G3eKn1HtyFo39JVotdbt1QY02CesXJhYiw8qcIFn51VR1b-n0Ay64z8C9uCFWcC~C-TZTd72VWqA2X3uVVQwLIF2DI6LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    time: '17:00',
    date: '9 марта 2021',
    type: 'Вебинар',
    title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
  },
  {
    id: '2',
    preview: 'https://s3-alpha-sig.figma.com/img/b290/20fc/d40682676472ae98552026199c5eb3b0?Expires=1694390400&Signature=SHTtQgdMhxO5TRpltsCbGStSYGv1t0zfZXUv4Ierxi9a1q0vEBsfpLbgle5NsT9Oqbjt1u3LVOC-LYrarvxS1sqE1fRjto6RN-Jp77i-xkTUwCxJH9y0pAtZjWGXa5O55~H0RsNXr0LGBuAgZZIpXVWn4OgTWe6mdu1hlp0irmp6DNXTXIlUj6knM-Y~WzrKwAEIaVSiIUc0dJDtiQAML3i5apS~0yTPncjaQqd-JDLaQYL3oUo47D~o5G3eKn1HtyFo39JVotdbt1QY02CesXJhYiw8qcIFn51VR1b-n0Ay64z8C9uCFWcC~C-TZTd72VWqA2X3uVVQwLIF2DI6LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    time: '17:00',
    date: '9 марта 2021',
    type: 'Вебинар',
    title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
  },
  {
    id: '3',
    preview: 'https://s3-alpha-sig.figma.com/img/b290/20fc/d40682676472ae98552026199c5eb3b0?Expires=1694390400&Signature=SHTtQgdMhxO5TRpltsCbGStSYGv1t0zfZXUv4Ierxi9a1q0vEBsfpLbgle5NsT9Oqbjt1u3LVOC-LYrarvxS1sqE1fRjto6RN-Jp77i-xkTUwCxJH9y0pAtZjWGXa5O55~H0RsNXr0LGBuAgZZIpXVWn4OgTWe6mdu1hlp0irmp6DNXTXIlUj6knM-Y~WzrKwAEIaVSiIUc0dJDtiQAML3i5apS~0yTPncjaQqd-JDLaQYL3oUo47D~o5G3eKn1HtyFo39JVotdbt1QY02CesXJhYiw8qcIFn51VR1b-n0Ay64z8C9uCFWcC~C-TZTd72VWqA2X3uVVQwLIF2DI6LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    time: '17:00',
    date: '9 марта 2021',
    type: 'Вебинар',
    title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
  },
];

export const Events = () => {
  return (
    <div className="events">
      {mockEvents.map(ev => <EventItem event={ev}
                                       key={ev.id} />)}
    </div>
  );
};


const EventItem = ({ event }: IEventItemProps) => {
  return <div className="event">
    <img src={event.preview}
         alt="event"
         className="event_preview" />

    <div className="event_content">
      <div className="event_title">
        {event.title}
      </div>

      <div className="event_meta">
        <div className="event_metaitem">
          <VideoCameraIcon />

          <div className="event_metatext">
            {event.type}
          </div>
        </div>


        <div className="event_metaitem">
          <CalendarIcon />

          <div className="event_metatext">
            {event.date}
          </div>
        </div>

        <div className="event_metaitem">
          <ClockIcon />

          <div className="event_metatext">
            {event.time}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

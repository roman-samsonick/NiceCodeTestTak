import React from 'react';
import './Videos.sass';


interface IVideo {
  id: string,
  title: string,
  author: string,
  date?: string,
  preview: string,
}

interface IVideoItemProps {
  video: IVideo;
}

const mockVideos: IVideo[] = [
  {
    id: '1',
    title: 'Крабик, ходьба в бок в приседе с двумя резинками Крабик, ходьба в бок в приседе с двумя резинками',
    author: 'Астахова Е.В.',
    preview: 'https://s3-alpha-sig.figma.com/img/ff9a/7496/d41f8b8fb98c96042cfe24bc97c143f1?Expires=1694390400&Signature=p03FzfgTbQuFs4BHr96A1eHjS1AScS0fMRaEgyoGbrfURR1Ygr6KO5pLjvv0Ax3MVKTfPDB9HhJYoAfzWQ4BHJ0crEAfGw4N7IDQepka2hKn65YaWncedF1brWCS8QlaZtL0hydFCx1MCztkoemYR6szHbeJtni5ikTrZWFig7zw~9IRgn7Vvbue3zZZZ25dN5iwrcAnbkQHfiKt4ITh8uCR9Ab57d7PICuo~IC85UJm7GxR1cZsZexoR1TYtSnzIGs3GJX2q~OKw9fktRxNTYTjwYESd-4aPUsNhxrUbizYNOZADvqVT11-ZmM2pIqYVIvc3r92NzqROxOixejrcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    id: '2',
    title: 'Разминка для локтевого сустава',
    author: 'Астахова Е.В.',
    preview: 'https://s3-alpha-sig.figma.com/img/282b/dbf9/43d4a62bad455bd3151994b9290926c9?Expires=1694390400&Signature=iXtueLGJvmOeaxFw-vt0tPGZB~hHxlok9D~O9Y-1h6itjm1uI8oWotU2kWC44bBtbUDS2FwFw0QMeqNC37JorQiIgTq7vjOrV19xbcsrJG7N0k7R5UvSnXfzvm42h3ZIyYu79--gpcPJAQcldMMf3ci80xZpvkwlhGKFGq3nQzTSsubvq0zZGjZiI7EsbKxCxh3OgGa0V~NWBe65o9ZkOqLTYU~rr3SvqOzM4JI0169Uy0K5XrC4HaabLpGVTOfZ8drrNONsxEiYDmylycSBG26iKb4fyAuF4J7AVbj6PvCj01EMNETD-3mJ6EFhCvlQDPmt~w5iLUZDTQazq8c-SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: '15.01.2019 - 22.01.2019',
  },
  {
    id: '3',
    title: 'Разминка для локтевого суставаРазминка для локтевого суставаРазминка для локтевого сустава',
    author: 'Астахова Е.В.',
    preview: 'https://s3-alpha-sig.figma.com/img/68c9/1b38/5c4758cbb5556daa616abb963b297836?Expires=1694390400&Signature=Anrl1E3L3eMrBa~~G2OnIxiLYC6cjuQQ3zM1usei26F97tt0lr2i--0oCa4VgE5Zz~ou2osu3vuhU9ogDh4gljL78B-FpSwWaenw80kESw-6kDGVsXuEWwET4IZ5wc2CR4TAOMEQW0AmQK6kAHs448wx8MWUgiT14881P0ztZKSdkUiopCC7gCIkoOcwoHbv3r70Uy~7U9prLK9AVuUc1byi8RayABOW-prrGhfHx9qfQGsB7FTQhrooQxo6W0bmKvKXPt6KWa2Mzmx4DWh~FgLfjV-EEJdQDMbIgiO0G~19HoGaFYQsi6ZDa2-QGVzw1TksnNlKlPzu1LpH5O64uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: '15.01.2019 - 22.01.2019',
  },
];


export const Videos = () => {
  return (
    <div className="videos">
      {mockVideos.map(vid => <VideoItem video={vid}
                                        key={vid.id} />)}
    </div>
  );
};


const VideoItem = ({ video }: IVideoItemProps) => {
  return (
    <div className="videoitem">
      <div className="videoitem_content">
        <img src={video.preview}
             className="videoitem_preview"
             alt="preview" />

        <div className="videoitem_text">
          <div className="videoitem_title">
            {video.title}
          </div>

          <div className="videoitem_author">
            {video.author}
          </div>
        </div>
      </div>

      {video.date && <div className="video_date">
        {video.date}
      </div>}
    </div>
  );
};

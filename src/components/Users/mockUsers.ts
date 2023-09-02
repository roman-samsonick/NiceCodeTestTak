// export const mockUsers: IUser[] = [
//   {
//     id: '1',
//     email: 'voluntarily@gmail.com',
//     img: 'https://cra.org/wp-content/uploads/2016/06/Satoe-200x200.jpg',
//   },
//   {
//     id: '2',
//     email: 'pathogenesis@gmail.com',
//     username: 'Волкова Кристина',
//     img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
//   },
//   {
//     id: '3',
//     email: 'annually@gmail.com',
//     username: 'Фирсова Милана',
//     img: 'https://portlandpsychotherapy.com/wp-content/uploads/sites/28/2022/09/Rachel-Marsh-PhD-200x200-1.jpg',
//   },
//   {
//     id: '4',
//     email: 'nosikov@list.ru',
//     username: 'Петрова Алёна',
//
//   },
//   {
//     id: '5',
//     email: 'drat@gmail.com',
//     username: 'Ткачева Мария',
//     img: 'https://www.newamerica.org/images/6nOGgYUR0zL6p2YRx_iwGr5WArk=/377/fill-200x200/tomicah-tillemann_person_image.jpeg',
//   },
//   {
//     id: '6',
//     email: 'although@gmail.com',
//     img: 'https://www.innovacareconcepts.com/wp-content/uploads/2020/09/Tylah-Evershed-Profile-200x200.jpg',
//   },
//   {
//     id: '7',
//     email: 'knottily@gmail.com',
//     username: 'Лыков Лев',
//   },
//   {
//     id: '8',
//     email: 'until@gmail.com',
//     username: 'Кондратьев Даниил',
//     img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
//   },
//   {
//     id: '9',
//     email: 'likely@gmail.com',
//     username: 'Мартич Роман',
//     img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
//   },
//   {
//     id: '10',
//     email: 'knottily@gmail.com',
//     username: 'Лыков Лев',
//   },
//   {
//     id: '11',
//     email: 'until@gmail.com',
//     username: 'Кондратьев Даниил',
//     img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
//   },
//   {
//     id: '12',
//     email: 'likely@gmail.com',
//     username: 'Мартич Роман',
//     img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
//   },
//   {
//     id: '13',
//     email: 'knottily@gmail.com',
//     username: 'Лыков Лев',
//   },
//   {
//     id: '14',
//     email: 'until@gmail.com',
//     username: 'Кондратьев Даниил',
//     img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
//   },
//   {
//     id: '15',
//     email: 'likely@gmail.com',
//     username: 'Мартич Роман',
//     img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
//   },
// ];


export interface IUser {
  id: string,
  username?: IUsername,
  sex: string,
  age: number,
  img?: string,
  email: string,
  status?: EUserStatus
}

export enum EUserStatus {
  WARNING = 'WARNING',
  MESSAGE = 'MESSAGE'
}

export interface IUsername {
  name: string,
  surname: string,
  patronymic: string,
}

export const mockUsers: IUser[] = [
  {
    id: '1',
    sex: 'Муж',
    age: 28,
    email: 'voluntarily@gmail.com',
    img: 'https://www.lse.ac.uk/Mathematics/assets/images/ProfilePhotos/Ahmad-Abdi-200x200.jpg',
    status: EUserStatus.MESSAGE,
  },
  {
    id: '2',
    email: 'pathogenesis@gmail.com',
    username: {
      surname: 'Волкова',
      name: 'Кристина',
      patronymic: 'Фёдоровна',
    },
    sex: 'Жен',
    age: 35,
    img: 'https://cra.org/wp-content/uploads/2016/06/Satoe-200x200.jpg',
  },
  {
    id: '3',
    email: 'annually@gmail.com',
    username: {
      surname: 'Фирсова',
      name: 'Милана',
      patronymic: 'Игоревна',
    },
    sex: 'Жен',
    age: 18,
    img: 'https://portlandpsychotherapy.com/wp-content/uploads/sites/28/2022/09/Rachel-Marsh-PhD-200x200-1.jpg',
    status: EUserStatus.WARNING,
  },
  {
    id: '4',
    email: 'nosikov@list.ru',
    username: {
      surname: 'Петрова',
      name: 'Алёна',
      patronymic: 'Петрововна',
    },
    sex: 'Жен',
    age: 40,
  },
  {
    id: '5',
    email: 'drat@gmail.com',
    username: {
      surname: 'Ткачев',
      name: 'Егор',
      patronymic: 'Романов',
    },
    sex: 'Муж',
    age: 25,
    img: 'https://www.newamerica.org/images/6nOGgYUR0zL6p2YRx_iwGr5WArk=/377/fill-200x200/tomicah-tillemann_person_image.jpeg',
  },
  {
    id: '6',
    email: 'although@gmail.com',
    sex: 'Жен',
    age: 27,
    img: 'https://www.innovacareconcepts.com/wp-content/uploads/2020/09/Tylah-Evershed-Profile-200x200.jpg',
    status: EUserStatus.WARNING,
  },
  {
    id: '7',
    email: 'knottily@gmail.com',
    username: {
      surname: 'Лыков',
      name: 'Лев',
      patronymic: 'Вадимович',
    },
    sex: 'Муж',
    age: 24,
  },
  {
    id: '8',
    email: 'until@gmail.com',
    username: {
      surname: 'Кондратьев',
      name: 'Даниил',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 90,
    img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
  },
  {
    id: '9',
    email: 'likely@gmail.com',
    username: {
      surname: 'Мартич',
      name: 'Роман',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 29,
    img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
  },
  {
    id: '10',
    email: 'knottily@gmail.com',
    username: {
      surname: 'Лыков',
      name: 'Лев',
      patronymic: 'Вадимович',
    },
    sex: 'Муж',
    age: 24,
  },
  {
    id: '11',
    email: 'until@gmail.com',
    username: {
      surname: 'Кондратьев',
      name: 'Даниил',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 90,
    img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
  },
  {
    id: '12',
    email: 'likely@gmail.com',
    username: {
      surname: 'Мартич',
      name: 'Роман',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 29,
    img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
  },
  {
    id: '13',
    email: 'knottily@gmail.com',
    username: {
      surname: 'Лыков',
      name: 'Лев',
      patronymic: 'Вадимович',
    },
    sex: 'Муж',
    age: 24,
  },
  {
    id: '14',
    email: 'until@gmail.com',
    username: {
      surname: 'Кондратьев',
      name: 'Даниил',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 90,
    img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
  },
  {
    id: '15',
    email: 'likely@gmail.com',
    username: {
      surname: 'Мартич',
      name: 'Роман',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 29,
    img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
  },
  {
    id: '16',
    email: 'knottily@gmail.com',
    username: {
      surname: 'Лыков',
      name: 'Лев',
      patronymic: 'Вадимович',
    },
    sex: 'Муж',
    age: 24,
  },
  {
    id: '17',
    email: 'until@gmail.com',
    username: {
      surname: 'Кондратьев',
      name: 'Даниил',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 90,
    img: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_3.0/smiling_man.jpg',
  },
  {
    id: '18',
    email: 'likely@gmail.com',
    username: {
      surname: 'Мартич',
      name: 'Роман',
      patronymic: 'Андреевич',
    },
    sex: 'Муж',
    age: 29,
    img: 'https://www.diplomacy.edu/wp-content/uploads/2022/08/Moctar-Yedaly-200x200-1.jpeg',
  },
];

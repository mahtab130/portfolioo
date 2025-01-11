interface IUserComment {
  id: number;
  name: string;
  rate: number;
  image: string;
  comment: string;
}

interface IBlogData {
  id: number;
  image: string;
  title: string;
  date?: string;
  writer?: string;
  studyTime?: string;
  description: string;
}

interface ICustomSwiperComment {
  data: IUserComment[];
}

interface IContentComment extends Omit<IUserComment, "id" | "image"> {
  classNames: { prev: string; next: string };
}

type TStandardSize = "small" | "medium" | "large";
interface ICustomLabel {
  label: string;
  color?: string;
  required?: boolean;
  size?: TStandardSize;
}

interface ICustomTitle {
  title: { text?: string; color?: string }[];
  pretitle?: string;
  setting?: {
    color?: string;
    iconColor?: string;
  };
}
interface IServiceBox {
  icon: TAny;
  title: string;
  description: string;
}
interface IEducationBox {
  title: string;
  description: {
    title: string;
    subtitle: string;
    years: string[];
  }[];
}
interface IResearchBox {
  url: string;
  title: string;
  image: string;
  description: string;
}
interface IAwardBox {
  icon: TAny;
  title: string;
  iconColor?: string;
  description: string;
}

interface IEmptyLastCenterJustify {
  xs?: number;
  md?: number;
  even?: boolean;
  length: number;
}

interface INoOptionsComponent {
  text?: string;
  imageSrc?: string;
  searchKey?: string;
  imageSize?: TStandardSize;
}

interface IContentSection<TSx = TAny> {
  image: string | JSX.Element;
  content: JSX.Element;
  setting?: {
    sx?: TSx;
    reverse?: boolean;
    imageWidth?: string;
    vectorSrc?: string;
  };
}

interface IProductCard {
  id: number;
  name: string;
  price: number;
  image: string;
  rate?: number;
  variant?: "sale" | "product" | "search" | "cart" | "category";
}

interface ICategoryCard {
  id: number;
  name: string;
  image: string;
  thumbnail?: string;
  onClick?: () => void;
  description?: string;
}
interface IBlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
  navigateString?: string;
  writer?: string;
  date?: string;
  studyTime?: string;
  content?: JSX.Element;
}

interface IFaqCard {
  id: number;
  title: string;
  description: string;
  expandedId?: number;
  handleExpansion?: (id: number) => void;
}
